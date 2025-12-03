// include-sidebar.js
// Carga `sidebar.html` y lo inyecta en la página. Después carga `script.js` y el script específico de la página si existe.
// Dispara un evento 'sidebarLoaded' cuando todo está listo.

(async function() {
    try {
        const resp = await fetch('sidebar.html');
        if (!resp.ok) throw new Error('No se pudo cargar sidebar.html');
        const html = await resp.text();

        const container = document.getElementById('sidebar-container');
        if (container) {
            container.innerHTML = html;
        } else {
            // si no hay contenedor, insertar al inicio del body
            document.body.insertAdjacentHTML('afterbegin', html);
        }

        // After injecting, wait a tick to let DOM update
        await new Promise(r => setTimeout(r, 10));

        // Load shared script (script.js) dynamically if not already loaded
        function loadScript(src) {
            return new Promise((resolve, reject) => {
                // check if already loaded
                if (document.querySelector('script[src="' + src + '"]')) return resolve();
                const s = document.createElement('script');
                s.src = src;
                s.async = false;
                s.onload = () => resolve();
                s.onerror = () => reject(new Error('Error cargando ' + src));
                document.body.appendChild(s);
            });
        }

        await loadScript('script.js');

        // If the page set window.pageScript, load it
        if (window.pageScript) {
            await loadScript(window.pageScript);
        }

        // Dispatch event to signal sidebar is loaded
        document.dispatchEvent(new CustomEvent('sidebarLoaded'));

    } catch (err) {
        console.error('include-sidebar error:', err);
    }
})();
