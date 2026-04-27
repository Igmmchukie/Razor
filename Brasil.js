const products = document.getElementById('products');

const items = [
  {
    name: 'Brasil 2026 Home',
    img: './Fotos/Brasil I 2026.webp'
  },
  {
    name: 'Brasil Away Azul',
    img: './Fotos/DALLE_2025-03-09_17.31.35_-_A_futuristic_and_technological_logo_for_a_digital_sales_store_called_Agora_e_Seu._The_design_features_a_sleek_modern_font_with_a_metallic_and_neon_.webp"'
  },
  {
    name: 'Brasil 1998 Retrô',
    img: './Fotos/Brasil I 1998.webp'
  },
  {
    name: 'Brasil Copa 2022',
    img: './Fotos/Brasil 2022.webp'
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
    </div>
  `;
});