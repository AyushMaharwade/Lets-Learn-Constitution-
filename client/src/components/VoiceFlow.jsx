import { useEffect } from "react";

const VoiceflowChat = () => {
  useEffect(() => {
    // Function to load the Voiceflow chat script
    const loadVoiceflowChat = () => {
      const existingScript = document.querySelector(
        'script[src="https://cdn.voiceflow.com/widget/bundle.mjs"]'
      );

      // Check if script already exists to prevent duplicates
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
        script.type = "text/javascript";
        script.async = true;

        // Initialize Voiceflow chat widget after the script is loaded
        script.onload = () => {
          if (window.voiceflow && window.voiceflow.chat) {
            window.voiceflow.chat.load({
              verify: { projectID: "674c15bba4a278c879b166db" },
              url: "https://general-runtime.voiceflow.com",
              versionID: "production",
            });
          }
        };

        // Append the script to the document
        const firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    };

    // Call the function to load the chat widget script
    loadVoiceflowChat();
  }, []);

  return (
    <div>
      {/* Placeholder for the chat widget */}
      <div id="voiceflow-chat-container"></div>
    </div>
  );
};

export default VoiceflowChat;
