export class Sanitizer {
    private secretMap = new Map<string, string>();
    private counter = 0;

    sanitize(text: string): { sanitizedText: string; count: number } {
        // Clear previous map
        this.secretMap.clear();
        this.counter = 0;

        let result = text;

        // 1. Email addresses
        // Regex: user@example.com
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        result = this.replaceSecrets(result, emailRegex, 'EMAIL');

        // 2. IPv4 addresses
        // Regex: 192.168.1.1
        const ipRegex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
        result = this.replaceSecrets(result, ipRegex, 'IP');

        // 3. AWS Access Keys
        // Regex: AKIA... (20 chars alphanumeric, starts with AKIA)
        const awsRegex = /\bAKIA[0-9A-Z]{16}\b/g;
        result = this.replaceSecrets(result, awsRegex, 'AWS_KEY');

        // 4. Generic API Keys
        // Regex: (sk_|api_|key_|token_)[a-zA-Z0-9_]{20,50}
        const apiKeyRegex = /\b(?:sk_|api_|key_|token_)[a-zA-Z0-9._]{10,100}\b/g;
        result = this.replaceSecrets(result, apiKeyRegex, 'API_KEY');

        return {
            sanitizedText: result,
            count: this.counter
        };
    }

    restore(text: string): string {
        let result = text;
        // Replace all placeholders with original values
        // Iterate over the map entries to replace back
        for (const [placeholder, original] of this.secretMap.entries()) {
            // Create a global regex for the placeholder to replace all occurrences if any (though usually unique per run)
            // Escaping < and > just in case, but simple string replaceAll is better if environment supports it (ES2021+)
            // Since target is es2020, we use split/join or global regex.
            // Placeholders are like <EMAIL_1>, so simple replace is fine.
            result = result.split(placeholder).join(original);
        }
        return result;
    }

    private replaceSecrets(text: string, regex: RegExp, prefix: string): string {
        return text.replace(regex, (match) => {
            this.counter++;
            const placeholder = `<${prefix}_${this.counter}>`;
            this.secretMap.set(placeholder, match);
            return placeholder;
        });
    }
}
