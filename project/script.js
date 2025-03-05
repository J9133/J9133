async function checkAppStatus() {
            try {
                const response = await fetch('https://raw.githubusercontent.com/J9133/J9133/main/project/config.json?timestamp=');
                if (!response.ok) {
                    throw new Error("HTTP error! status: ${response.status}");
                }
                const config = await response.json();
                console.log(config.enabled)
                if (config.enabled) {
                    window.location.href = "https://www.youtube.com";
                } else {
                    document.body.innerHTML = "<h1>التطبيق معطل حاليًا</h1>";
                }
            } catch (error) {
                document.body.innerHTML = "<h1>حدث خطأ في الاتصال</h1>";
            }
        }

        setInterval(checkAppStatus, 1000);
        window.onload = checkAppStatus;
