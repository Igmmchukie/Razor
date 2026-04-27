const products = document.getElementById('products');

const items = [
  {
    name: 'Brasil Away Azul',
    img: './Fotos/DALLE_2025-03-09_17.31.35_-_A_futuristic_and_technological_logo_for_a_digital_sales_store_called_Agora_e_Seu._The_design_features_a_sleek_modern_font_with_a_metallic_and_neon_.webp"'
  },
  {
    name: 'São Paulo I 2026',
    img: './Fotos/Camisa I SP 2026.webp'
  },
  {
    name: 'Palmeiras I 2026',
    img: './Fotos/Camisa I SEP 2026.webp'
  },
  {
    name: 'Corinthians I 25/26',
    img: './Fotos/Camisa I COR 2026.webp'
  }
];

items.forEach(item => {
  products.innerHTML += `
    <div class="product">
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <div class="stars">★★★★★</div>
      <div class="price">
        <span class="pix">R$ 199,90 no PIX</span><br>
        12x de R$19,90
      </div>
      <button class="btn">Comprar</button>
    </div>`;
});
function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const cardWidth = carousel.querySelector('.product').offsetWidth + 15;

  carousel.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

``
