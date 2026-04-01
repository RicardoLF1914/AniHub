// ===== THEME TOGGLE FUNCTIONALITY =====

class ThemeManager {
    constructor() {
        this.STORAGE_KEY = 'netflix-theme';
        this.DARK_THEME = 'dark';
        this.LIGHT_THEME = 'light';
        this.init();
    }

    // Initialize theme on page load
    init() {
        const savedTheme = this.getSavedTheme();
        const preferredTheme = savedTheme || this.getSystemPreference();
        
        this.setTheme(preferredTheme);
        this.attachEventListeners();
    }

    // Get theme from localStorage
    getSavedTheme() {
        return localStorage.getItem(this.STORAGE_KEY);
    }

    // Get system preference for theme
    getSystemPreference() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return this.LIGHT_THEME;
        }
        return this.DARK_THEME;
    }

    // Set theme on document
    setTheme(theme) {
        const htmlElement = document.documentElement;
        
        if (theme === this.LIGHT_THEME) {
            htmlElement.setAttribute('data-theme', this.LIGHT_THEME);
        } else {
            htmlElement.setAttribute('data-theme', this.DARK_THEME);
        }

        // Save to localStorage
        localStorage.setItem(this.STORAGE_KEY, theme);
        
        // Update button state
        this.updateButtonState(theme);
    }

    // Toggle between themes
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
        
        this.setTheme(newTheme);
    }

    // Update button icon and text
    updateButtonState(theme) {
        const button = document.getElementById('theme-toggle');
        
        if (!button) return;

        if (theme === this.LIGHT_THEME) {
            button.innerHTML = '☀️';
            button.setAttribute('aria-label', 'Ativar modo escuro');
        } else {
            button.innerHTML = '🌙';
            button.setAttribute('aria-label', 'Ativar modo claro');
        }
    }

    // Attach event listeners
    attachEventListeners() {
        const button = document.getElementById('theme-toggle');
        
        if (button) {
            button.addEventListener('click', () => this.toggleTheme());
        }

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
                const newTheme = e.matches ? this.LIGHT_THEME : this.DARK_THEME;
                this.setTheme(newTheme);
            });
        }
    }
}

// Initialize theme manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
