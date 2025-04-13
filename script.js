// Sample wallpaper data
const wallpapers = [
    {
        id: 1,
        category: 'cars',
        previewUrl: 'https://i.imgur.com/2koIgol.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1qCrejtS6j9sLEe_ntLor_i1fqetaZurB&export=download&authuser=0&confirm=t&uuid=e99ab091-22cc-4741-9266-47d30cd7bf3f&at=APcmpoypi3Zi_3Yc3tujMXPRoTq3:1744527943076'
    },
    {
        id: 2,
        category: 'fantasy',
        previewUrl: 'https://i.imgur.com/OO1QtHX.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=13npq6YgYeCuciEJkG3g1sNbkvpTOQK-I&export=download&authuser=0&confirm=t&uuid=3889e4cc-ffcf-4da0-a3b3-da67e8db6c15&at=APcmpoz0AUhpWmT3E9Nb9oWTzHzz:1744276065519'
    },
    {
        id: 3,
        category: 'animated',
        previewUrl: 'https://i.imgur.com/hEBQFlf.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1l0z8jNXX84_1wpwuAbqqLKdhIwT2gDL1&export=download&authuser=0&confirm=t&uuid=a0474f2e-b617-4b1c-b6f8-97830f10cfe5&at=APcmpox3zvscjQjnCx1NAnt7OqJ7:1744281758812'
    },
    {
        id: 4,
        category: 'animated',
        previewUrl: 'https://i.imgur.com/5UFDwij.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1LpkvwEn0ETVGj052fHroyWhDO9NmDKjr&export=download&authuser=0&confirm=t&uuid=7acb0d34-19a7-472f-abc1-679e4193ff1e&at=APcmpowBgw4So7wzjcfAc8hS7LQ8:1744283462878'
    },
    {
        id: 5,
        category: 'nature',
        previewUrl: 'https://i.imgur.com/oIag7bW.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1CyHt8LvuItdKrYZJWXATQfPeK8LYwOXl&export=download&authuser=0&confirm=t&uuid=39d31cb4-093b-4824-a33c-0f785a13814b&at=APcmpowVpgZTfg8Vwt544ogAPZiR:1744283572036'
    },
    {
        id: 6,
        category: 'nature',
        previewUrl: 'https://i.imgur.com/r3Ekdnv.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1E30VB78LZ_BIC3RhYoBpxgy4CR_G4hdX&export=download&authuser=0&confirm=t&uuid=cff125fa-c165-4e42-9277-e40be2412348&at=APcmpozXy3zF0Fd317xaK3o9vqqx:1744400793301'
    },
    {
        id: 7,
        category: 'fantasy',
        previewUrl: 'https://i.imgur.com/7rZT7X4.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1NCOQL75bHUM48EsS7m5kOfBxV4klz6kg&export=download&authuser=0&confirm=t&uuid=ed592183-2994-45ee-a309-4c946a4546b1&at=APcmpoy6IZQBTNS-rs2zW9LTO1ww:1744401332247'
    },
    {
        id: 8,
        category: 'fantasy',
        previewUrl: 'https://i.imgur.com/XSLHL4W.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1R3UIVXUQ6QVAP1lid5K421CN_Fe0MjRg&export=download&authuser=0&confirm=t&uuid=6c407f52-4abc-4048-a814-6fead5f31b63&at=APcmpoxIX43YByenjfInwHoONBrW:1744406833880'
    },
    {
        id: 9,
        category: 'fantasy',
        previewUrl: 'https://i.ibb.co/5Xcxj7KQ/image-fx-2025-04-12-T003944-697.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1WmIgR_H7XPt_CuNnN_umYSEP4tkiLhK1&export=download&authuser=0&confirm=t&uuid=a89b66a8-7328-469b-bc9a-c2672252e251&at=APcmpowu9mjGcVBmAB2NlGJkFF1a:1744525446988'
    },
    {
        id: 10,
        category: 'fantasy',
        previewUrl: 'https://i.ibb.co/Fkx0hhNb/image-fx-25-1.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1axMD84NFBrr6IlZYbs1WahP_G8OBPtQW&export=download&authuser=0&confirm=t&uuid=fd409d14-d616-484d-aa03-151d29e724f6&at=APcmpowwuUEVa9ra1lRUpAI43fYj:1744527759294'
    },
    {
        id: 11,
        category: 'fantasy',
        previewUrl: 'https://i.ibb.co/prrD3gfK/image-fx-37-1.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1PbqzX-UdQ754OKa2JD8xt-2qB2tC0S4o&export=download&authuser=0&confirm=t&uuid=925e09a7-14dd-4138-be98-c9594b0e20e0&at=APcmpoxFlDCq8X-4cI57OrN5CpJp:1744527980155'
    },
    {
        id: 12,
        category: 'animated',
        previewUrl: 'https://i.ibb.co/xKTk6gtf/image-fx-43-1.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1_La4fmbgkOxarRrGI1eyx8Hqqpz_osfG&export=download&authuser=0&confirm=t&uuid=2105b474-4883-4788-af65-69e1491c9a12&at=APcmpozZjEks7zIiNfxnPnPt-AGH:1744528199336'
    },
    {
        id: 13,
        category: 'fantasy',
        previewUrl: 'https://i.ibb.co/cSFzbM4c/image-fx-2025-04-10-T124653-984-1.png',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1sCC5Zoi5AcjPJwXdJkRgcvIgbvz2nGoZ&export=download&authuser=0&confirm=t&uuid=bf8d167a-594f-46bd-ba09-b9a424640b69&at=APcmpow9-CnUyBgFdHHxxITyF7fn:1744528336008'
    }
];

// DOM Elements
const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the gallery
function initializeGallery() {
    gallery.innerHTML = ''; // Clear existing content
    wallpapers.forEach(wallpaper => {
        const card = createWallpaperCard(wallpaper);
        gallery.appendChild(card);
    });
}

// Create wallpaper card
function createWallpaperCard(wallpaper) {
    const card = document.createElement('div');
    card.className = 'wallpaper-card';
    card.setAttribute('data-category', wallpaper.category);

    const img = document.createElement('img');
    img.src = wallpaper.previewUrl;
    img.alt = `${wallpaper.category} Wallpaper`;
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    const viewBtn = document.createElement('button');
    viewBtn.className = 'view-btn';
    viewBtn.innerHTML = '<i class="fas fa-eye"></i> View';
    viewBtn.onclick = () => handleView(wallpaper.previewUrl, wallpaper.downloadUrl);

    overlay.appendChild(viewBtn);
    card.appendChild(img);
    card.appendChild(overlay);

    return card;
}

// Filter wallpapers
function filterWallpapers(category) {
    const cards = document.querySelectorAll('.wallpaper-card');
    const lowerCategory = category.toLowerCase();
    
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category').toLowerCase();
        if (lowerCategory === 'all' || cardCategory === lowerCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Handle view
function handleView(imageUrl, downloadUrl) {
    if (!imageUrl) return;
    window.open(`view.html?image=${encodeURIComponent(imageUrl)}&download=${encodeURIComponent(downloadUrl || imageUrl)}`, '_blank');
}

// Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter wallpapers
        const category = button.getAttribute('data-category');
        filterWallpapers(category);
    });
});

// Initialize the gallery when the page loads
document.addEventListener('DOMContentLoaded', initializeGallery); 