import React, { Component } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

export default function FacebookChat() {
    return (
      <div>
        <FacebookProvider appId="688823799854386" chatSupport>
          <CustomChat pageId="155352010994805" minimized={false} />
        </FacebookProvider>
      </div>
    );
}
