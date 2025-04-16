// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Theme Customizer
const customizer = document.querySelector('.theme-customizer');
const customizerToggle = document.querySelector('.customizer-toggle');
const themeToggle = document.getElementById('theme-toggle');
const colorOptions = document.querySelectorAll('.color-option');
const radiusSlider = document.getElementById('radius-slider');
const root = document.documentElement;

// Toggle customizer panel
customizerToggle.addEventListener('click', () => {
    const isOpen = customizer.classList.contains('open');
    
    // Remove any existing animation classes
    customizerToggle.classList.remove('spinning', 'spinning-back');
    
    // Add the appropriate animation class
    customizerToggle.classList.add(isOpen ? 'spinning-back' : 'spinning');
    
    // Toggle the customizer panel
    customizer.classList.toggle('open');
});

// Theme toggle
themeToggle.addEventListener('change', () => {
    const isDarkMode = themeToggle.checked;
    const currentColor = getComputedStyle(root).getPropertyValue('--primary-color').trim();
    
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Handle color switching when changing themes
    if (isDarkMode && currentColor === '#000000') {
        // Switch from black to default dark theme color
        const defaultDarkColor = '#6BCF6F';
        updateThemeColor(defaultDarkColor);
    } else if (!isDarkMode && currentColor === '#ffffff') {
        // Switch from white to default light theme color
        const defaultLightColor = '#4CAF50';
        updateThemeColor(defaultLightColor);
    }
});

// Add this new helper function to update theme colors
function updateThemeColor(color) {
    root.style.setProperty('--primary-color', color);
    root.style.setProperty('--secondary-color', color);
    root.style.setProperty('--accent-color', color);
    root.style.setProperty('--heading-color', color);
    localStorage.setItem('primary-color', color);
    
    // Update gear icon color
    if (color === '#ffffff') {
        customizerToggle.classList.add('black-icon');
    } else {
        customizerToggle.classList.remove('black-icon');
    }
    
    // Update the active state of color options
    colorOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.color === color);
    });
}

// Color picker
colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        const color = option.dataset.color;
        const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
        
        // Prevent white in light mode and black in dark mode
        if ((isDarkMode && color === '#000000') || (!isDarkMode && color === '#ffffff')) {
            return; // Don't apply the color
        }

        updateThemeColor(color);
    });
});

// Border radius slider
radiusSlider.addEventListener('input', () => {
    const value = radiusSlider.value;
    root.style.setProperty('--border-radius', value + 'px');
    root.style.setProperty('--squircle-radius', (value * 3) + 'px');
    localStorage.setItem('border-radius', value);
});

// Load saved preferences
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedColor = localStorage.getItem('primary-color');
    const savedRadius = localStorage.getItem('border-radius');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.checked = savedTheme === 'dark';
        
        // If the saved color is inappropriate for the current theme, reset to default
        if (savedColor === '#ffffff' && savedTheme === 'light') {
            updateThemeColor('#4CAF50'); // Default light theme color
        } else if (savedColor === '#000000' && savedTheme === 'dark') {
            updateThemeColor('#6BCF6F'); // Default dark theme color
        } else if (savedColor) {
            updateThemeColor(savedColor);
        }
    }

    if (savedRadius) {
        radiusSlider.value = savedRadius;
        root.style.setProperty('--border-radius', savedRadius + 'px');
        root.style.setProperty('--squircle-radius', (savedRadius * 3) + 'px');
    }
});

// Custom color picker
const customColorInput = document.getElementById('custom-color');

customColorInput.addEventListener('input', () => {
    const color = customColorInput.value;
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // Check if the color is too light for light mode or too dark for dark mode
    const rgb = hexToRgb(color);
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    
    if ((!isDarkMode && brightness > 240) || (isDarkMode && brightness < 15)) {
        return; // Skip unsuitable colors
    }

    updateThemeColor(color);
    
    // Remove active state from preset colors
    colorOptions.forEach(opt => opt.classList.remove('active'));
});

// Helper function to convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Location links for landscapes
const locationLinks = {
    // Mountains
    'landscapesharrmountains.png': 'https://www.google.com/maps/place/Shar+Mountains+National+Park/@42.0833318,20.833367,795m/data=!3m1!1e3!4m6!3m5!1s0x1353ef47d8364dcb:0xaa1bc3c14f4cc725!8m2!3d42.0829153!4d20.8322356!16s%2Fg%2F11twr90snn!5m1!1e4?entry=ttu',
    'landscapebjeshketenemuna.png': 'https://www.google.com/maps/place/Albanian+Alps/@42.4551833,19.7968658,1880m/data=!3m1!1e3!4m14!1m7!3m6!1s0x135265f576ef6c01:0x22a9eeff6b3f7dea!2sAlbanian+Alps!8m2!3d42.4552003!4d19.8029854!16zL20vMGNxem40!3m5!1s0x135265f576ef6c01:0x22a9eeff6b3f7dea!8m2!3d42.4552003!4d19.8029854!16zL20vMGNxem40?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'landscapeskiing.png': 'https://www.google.com/maps/place/Brezovica/@42.1828442,21.0323195,794m/data=!3m1!1e3!4m10!1m2!2m1!1sski+resort+near+Brezovic%C3%AB!3m6!1s0x13538b004ca0af49:0xf4f7a74f388b41b7!8m2!3d42.1830897!4d21.035484!15sChpza2kgcmVzb3J0IG5lYXIgQnJlem92aWPDq1ocIhpza2kgcmVzb3J0IG5lYXIgYnJlem92aWPDq5IBCnNraV9yZXNvcnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTmZMVGN0YUZsUkVBReABAPoBBAgRECI!16s%2Fg%2F11y8g04kqk?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    
    // Water Features
    'landscapeKosovoMirusha.png': 'https://www.google.com/maps/place/Mirusha+Waterfalls/@42.5242179,20.5821603,591m/data=!3m1!1e3!4m6!3m5!1s0x135309ec182ce59b:0x1a21cc54f874307b!8m2!3d42.524196!4d20.5828908!16s%2Fm%2F04z_d44?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'landscapewhitedrin.png': 'https://www.google.com/maps/place/White+Drin+Waterfall/@42.7380616,20.3031443,936m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1352e2eca08c51ff:0x86d08c3a08112a60!2sWhite+Drin+Waterfall!8m2!3d42.7380494!4d20.3057814!16s%2Fm%2F047g068!3m5!1s0x1352e2eca08c51ff:0x86d08c3a08112a60!8m2!3d42.7380494!4d20.3057814!16s%2Fm%2F047g068?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'landscapebatllavalake.png': 'https://www.google.com/maps/place/Batlavsko+Jezero/@42.8196956,21.3025752,2223m/data=!3m1!1e3!4m6!3m5!1s0x1354baa3cf491ec5:0x9efa0a91dbc952ff!8m2!3d42.8197002!4d21.3128213!16s%2Fm%2F03cxlrx?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    
    // Caves
    'gadimecave.png': 'https://www.google.com/maps/place/Gadime+Cave/@42.4780776,21.2053806,664m/data=!3m1!1e3!4m14!1m7!3m6!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!2sGadime+Cave!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6!3m5!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'landscaperugova.png': 'https://www.google.com/maps/place/Rugova+Canyon+viewpoint/@42.6650252,20.2284674,788m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1352fb0c606f50ab:0xbe64ab28ca45c30a!2sRugova+Canyon+viewpoint!8m2!3d42.6650252!4d20.2310477!16s%2Fg%2F11qhcrhjgd!3m5!1s0x1352fb0c606f50ab:0xbe64ab28ca45c30a!8m2!3d42.6650252!4d20.2310477!16s%2Fg%2F11qhcrhjgd?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'landscapemarble.png': 'https://www.google.com/maps/place/Gadime+Cave/@42.4780776,21.2053806,664m/data=!3m1!1e3!4m14!1m7!3m6!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!2sGadime+Cave!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6!3m5!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    
    // Extra Mountains
    'gjeravicapeak.png': 'https://www.google.com/maps/place/Gjeravica/@42.5316487,20.1332698,3158m/data=!3m1!1e3!4m14!1m7!3m6!1s0x13525758b9f25ebb:0x52be42cc69a507c7!2sGjeravica!8m2!3d42.5318078!4d20.1399003!16s%2Fm%2F026d4l8!3m5!1s0x13525758b9f25ebb:0x52be42cc69a507c7!8m2!3d42.5318078!4d20.1399003!16s%2Fm%2F026d4l8?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'rugovamountains.png': 'https://www.google.com/maps/place/Rugova+Canyon+viewpoint/@42.6650252,20.2284674,788m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1352fb0c606f50ab:0xbe64ab28ca45c30a!2sRugova+Canyon+viewpoint!8m2!3d42.6650252!4d20.2310477!16s%2Fg%2F11qhcrhjgd!3m5!1s0x1352fb0c606f50ab:0xbe64ab28ca45c30a!8m2!3d42.6650252!4d20.2310477!16s%2Fg%2F11qhcrhjgd?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'kopaonikmountains.png': 'https://www.google.com/maps/place/Kopaonik/@43.2674695,20.820668,1312m/data=!3m1!1e3!4m10!1m2!2m1!1skopaonik+mountains!3m6!1s0x47563d7f99fccf2f:0x7e60d90e21e4ae77!8m2!3d43.2680447!4d20.8263088!15sChJrb3Bhb25payBtb3VudGFpbnNaFCISa29wYW9uaWsgbW91bnRhaW5zkgEObW91bnRhaW5fcmFuZ2XgAQA!16zL20vMDk3Ym16?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    
    // Extra Water Features
    'mirushafalls.png': 'https://www.google.com/maps/place/Mirusha+Waterfalls+%26+Canyons/@42.5236849,20.5841499,790m/data=!3m2!1e3!4b1!4m6!3m5!1s0x135309ce4dcd7b4d:0xe3ce22b7272791c3!8m2!3d42.5236849!4d20.5867302!16s%2Fm%2F012mg2by?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'gazivodalake.png': 'https://www.google.com/maps/dir//Gazivoda+Lake/@42.9501218,20.5224095,14920m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x13533a7e6f185d91:0x249523c44023dd3b!2m2!1d20.5736873!2d42.9584293?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'lumbardhiriver.png': 'https://www.google.com/maps/place/Lumbardhi+i+Pej%C3%ABs/@42.6379866,20.3937488,1576m/data=!3m1!1e3!4m10!1m2!2m1!1slumbardhi+river!3m6!1s0x135305d390dd39eb:0x364d85768ff96a80!8m2!3d42.6385682!4d20.4005814!15sCg9sdW1iYXJkaGkgcml2ZXJaESIPbHVtYmFyZGhpIHJpdmVykgEFcml2ZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTTFNR0ZETVRkUlJSQULgAQD6AQQIABAM!16s%2Fg%2F11bc5f_b5r?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    
    // Extra Caves
    'radavccave.png': 'https://www.google.com/maps/place/Radaci+Cave/@42.7376355,20.3096046,468m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1352e3efc0cfdfe3:0xd82605749cc097ff!2sRadaci+Cave!8m2!3d42.7375461!4d20.3110301!16s%2Fg%2F11hdx1rnf1!3m5!1s0x1352e3efc0cfdfe3:0xd82605749cc097ff!8m2!3d42.7375461!4d20.3110301!16s%2Fg%2F11hdx1rnf1?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'pejacave.png': 'https://www.google.com/maps/place/Radaci+Cave/@42.7376355,20.3096046,468m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1352e3efc0cfdfe3:0xd82605749cc097ff!2sRadaci+Cave!8m2!3d42.7375461!4d20.3110301!16s%2Fg%2F11hdx1rnf1!3m5!1s0x1352e3efc0cfdfe3:0xd82605749cc097ff!8m2!3d42.7375461!4d20.3110301!16s%2Fg%2F11hdx1rnf1?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    'gadimecave2.png': 'https://www.google.com/maps/place/Gadime+Cave/@42.4780776,21.2053806,664m/data=!3m1!1e3!4m14!1m7!3m6!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!2sGadime+Cave!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6!3m5!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D'
};

// Image click handler
document.querySelectorAll('.card-image').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.querySelector('.fullscreen-modal');
        const modalImg = modal.querySelector('.modal-image');
        const mapsButton = modal.querySelector('.maps-button');
        
        modalImg.src = this.src;
        
        // Only handle maps button if it exists (landscapes page)
        if (mapsButton && window.location.pathname.includes('landscapes.html')) {
            const imageName = this.src.split('/').pop();
            if (locationLinks[imageName]) {
                mapsButton.href = locationLinks[imageName];
                mapsButton.style.display = 'flex';
            } else {
                mapsButton.style.display = 'none';
            }
        }
        
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        
        document.body.style.overflow = 'hidden';
    });
});

// Close modal button
document.querySelector('.close-modal').addEventListener('click', closeModal);

// Close modal when clicking outside image
document.querySelector('.fullscreen-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal function
function closeModal() {
    const modal = document.querySelector('.fullscreen-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.querySelector('.modal-image').src = '';
    }, 300);
    document.body.style.overflow = '';
}

// Close on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Add this to your existing main.js file
document.querySelectorAll('.see-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const hiddenGrid = document.querySelector(`.${targetId}`);
        
        hiddenGrid.classList.toggle('show');
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            this.textContent = 'Show Less';
        } else {
            this.textContent = `See More ${targetId.split('-')[0].charAt(0).toUpperCase() + targetId.split('-')[0].slice(1)}`;
        }
        
        // Smooth scroll to show new content
        if (hiddenGrid.classList.contains('show')) {
            hiddenGrid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});