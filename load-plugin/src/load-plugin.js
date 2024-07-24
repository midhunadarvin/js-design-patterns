// Fetch Plugin
document.addEventListener("DOMContentLoaded", function (event) {
  /* 
      - Code to execute when only the HTML document is loaded.
      - This doesn't wait for stylesheets, 
        images, and subframes to finish loading. 
    */
  const loadPluginButton = document.getElementById("load-plugin-button");
  loadPluginButton.addEventListener("click", () => {

    let plugin_script = document.createElement('script');
    plugin_script.setAttribute('src','/plugin.js');
    document.head.appendChild(plugin_script);
  });
});
