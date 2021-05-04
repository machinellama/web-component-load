module.exports.load = function(url, options = {}) {
  const { scripts, styles } = options;

  let scriptFiles;
  if (scripts) {
    scriptFiles = scripts;
  } else {
    scriptFiles = ['runtime.js', 'polyfills.js', 'vendor.js', 'main.js', 'styles.js'];
  }

  let styleFiles;
  if (styles) {
    styleFiles = styles;
  } else {
    styleFiles = ['styles.css'];
  }

  for (let i = 0; i < scriptFiles.length; i++) {
    const fileName = scriptFiles[i];
    const src = url + '/' + fileName;

    if (!findScript(src)) {
      const script = document.createElement('script');
      script.src = src;
      document.head.appendChild(script);
    }
  }

  for (let i = 0; i < styleFiles.length; i++) {
    const fileName = styleFiles[i];
    const styleHref = url + '/' + fileName;

    if (!findStyleSheet(styleHref)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = styleHref;
      document.head.appendChild(link);
    }
  }
}

function findScript(src) {
  const currentScripts = document.scripts;

  for (let i = 0; i < currentScripts.length; i++) {
    if (currentScripts[i] && currentScripts[i].src === src) {
      return true;
    }
  }

  return false;
}

function findStyleSheet(href) {
  const currentStyles = document.styleSheets;

  for (let i = 0; i < currentStyles.length; i++) {
    if (currentStyles[i] && currentStyles[i].href === href) {
      return true;
    }
  }

  return false;
}