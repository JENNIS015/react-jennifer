export const Data= [
    {
        id: 1,
        title: 'Notebook ASUS x509 15.6" Celeron N4020 4GB 500GB Win10 ',
        image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21800_Notebook_ASUS_x509_15.6__Celeron_N4020_4GB_500GB_Win10_e0bd2853-grn.jpg',
        price: 56420,
        stock: 5
      },
      {
        id: 2,
        title: 'Notebook Lenovo 14" AMD Pro A4-4350B 4GB 500GB DOS',
        image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24158_Notebook_Lenovo_14__AMD_Pro_A4-4350B_4GB_500GB_DOS_28a58e50-grn.jpg',
        price:  57480,
        stock: 10
      },
      {
        id: 3,
        title: 'Notebook ASUS ROG STRIX G512LV 15.6" 144Hz i7-10870H 16GB 1Tb NVMe RTX 2060 ',
        image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25107_Notebook_ASUS_ROG_STRIX_G512LV_15.6__144Hz__i7-10870H_16GB_1Tb_NVMe_RTX_2060_236027fd-grn.jpg',
        price: 266250,
        stock: 10
      },
      {
          id: 4,
          title: 'Notebook ASUS TUF FA506 15.6" 144Hz Ryzen 7 4800H GTX1660Ti 6GB DDR4 16GB M.2 512GB',
          image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26623_Notebook_ASUS_TUF_FA506_15.6__144Hz_Ryzen_7_4800H_GTX1660Ti_6GB_DDR4_16GB__M.2_512GB_d1b51c53-grn.jpg',
          price: 203000,
          stock: 5
        },
        {
            id: 5,
            title: 'Notebook ASUS TUF FA506 15.6" 144Hz Ryzen 7 4800H GTX1660Ti 6GB DDR4 16GB M.2 512GB',
            image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26623_Notebook_ASUS_TUF_FA506_15.6__144Hz_Ryzen_7_4800H_GTX1660Ti_6GB_DDR4_16GB__M.2_512GB_d1b51c53-grn.jpg',
            price: 203000,
            stock: 5
          }


];
 

export const getProductos = new Promise((res, rej) => {
  setTimeout(() => {
    res(Data);
  }, 2000);
});