# doom-bot

### A discord bot thats open-source, works, and listens to user feedback.

## Command Processing
---
1. Use a **listener** that will be attached to each **on**
```typescript
// How it will be used
clent.on('message', MessageListener);

// Implementation
function MessageListener(msg: Message): void {
    // First level of parsing to determine which command

    // After the command has been determined then call the parser associated with the command

    // Pass arguments into the excute function

    // NOTE: Maybe the parser could just be built into the class
}
```