import {Store} from './store';

export const Amazon_3: Store = {
  backoffStatusCodes: [403, 429, 503],
  captchaDeterrent: {
    hardLinks: [
      'https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video',
      'https://www.amazon.com/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&ref_=nav_cs_whole_foods_in_region',
      'https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb',
    ],
    searchTerms: ['goober', 'dungeons+and+dragons'],
    searchUrl: 'https://www.amazon.com/s?k=%%s&i=todays-deals&ref=nb_sb_noss_2',
  },
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    inStock: [
      {
        container: '#a-autoid-2',
        text: ['add to cart'],
      },
    ],
    maxPrice:  {
      container: '#aod-price-1.a-section',
      },
},
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B089KV4YYX&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.com/gp/product/B089KV4YYX',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P3XJLJJ&Quantity.1=1',
      model: 'gaming oc',
      series: 'Zotac_3060ti',
      url: 'https://www.amazon.com/gp/product/B08P3XJLJJ#aod',
    },
  ],
  name: 'Amazon_3',
};
