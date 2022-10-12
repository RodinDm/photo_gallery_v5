const input = document.querySelector('#search');
const gallery = document.querySelector('.gallery');

const data = [
    {
        src: './photos/thumbnails/01.jpg',
        caption: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
        alt: 'Hay Bales',
        href: './photos/01.jpg',
    },
    {
        src: './photos/thumbnails/02.jpg',
        caption: 'The lake was so calm today. We had a great view of the snow on the mountains from here.',
        alt: 'Lake',
        href: './photos/02.jpg',
    },
    {
        src: './photos/thumbnails/03.jpg',
        caption: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
        alt: 'Canyon',
        href: './photos/03.jpg',
    },
    {
        src: './photos/thumbnails/04.jpg',
        caption: 'It was amazing to see an iceberg up close, it was so cold but didn`t snow today.',
        alt: 'Iceberg',
        href: './photos/04.jpg',
    },
    {
        src: './photos/thumbnails/05.jpg',
        caption: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
        alt: 'Desert',
        href: './photos/05.jpg',
    },
    {
        src: './photos/thumbnails/06.jpg',
        caption: 'Fall is coming, I love when the leaves on the trees start to change color.',
        alt: 'Fall',
        href: './photos/06.jpg',
    },
    {
        src: './photos/thumbnails/07.jpg',
        caption: 'I drove past this plantation yesterday, everything is so green!',
        alt: 'Plantation',
        href: './photos/07.jpg',
    },
    {
        src: './photos/thumbnails/08.jpg',
        caption: 'My summer vacation to the Oregon Coast. I love the sandy dunes!',
        alt: 'Dunes',
        href: './photos/08.jpg',
    },
    {
        src: './photos/thumbnails/09.jpg',
        caption: 'We enjoyed a quiet stroll down this countryside lane.',
        alt: 'Countryside Lane',
        href: './photos/09.jpg',
    },
    {
        src: './photos/thumbnails/10.jpg',
        caption: 'Sunset at the coast! The sky turned a lovely shade of orange.',
        alt: 'Sunset',
        href: './photos/10.jpg',
    },
    {
        src: './photos/thumbnails/11.jpg',
        caption: 'I did a tour of a cave today and the view of the landscape below was breathtaking.',
        alt: 'Cave',
        href: './photos/11.jpg',
    },
    {
        src: './photos/thumbnails/12.jpg',
        caption: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.',
        alt: 'Bluebells',
        href: './photos/12.jpg',
    },
];

for (let i = 0; i < data.length; i++) {
    const a = document.createElement('a');
    a.href = data[i].href;
    a.dataset.caption = data[i].caption;
    const img = document.createElement('img');
    img.src = data[i].src;
    img.alt = data[i].alt;
    a.appendChild(img);
    gallery.appendChild(a);
}

input.addEventListener('keyup', function(event) {
    const value = event.target.value.toLowerCase();
    for (const child of gallery.children) {
        const caption = child.dataset.caption.toLowerCase();
        if (caption.includes(value)) {
            child.style.display = 'block';
        }
        else {
            child.style.display = 'none';
        }
    }
});

window.addEventListener('load', function () {
    baguetteBox.run('.gallery');
});