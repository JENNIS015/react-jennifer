import "firebase/firestore";
import { getFirestore } from "./getFirestore";
import { useEffect } from "react";
export const data = [
  {
    nombre: "ANDROID SMART TV NOBLEX 32 PULGADAS HD DM32X7000",
    urlImagen: "/assets/image/productos/tv-android.jpg",
    price: 34999,
    stock: 100,
    categoria: "televisores",
    descripcion:
      'Smart TV de 32"con Android. Resolucion 1366 x 768. HDMI x 2. 2 Puertos USB. Wi Fi. Apto para navegacion en internet, Netflix, youtube. Posibilidad de compartir la pantalla con Windows 10. Puerto de red. 2 Parlantes con 5 modos de sonidos diferentes',
  },
  {
    nombre: "SMART TV SAMSUNG 50 PULGADAS 4K UHD UN50TU7000GCZB",
    urlImagen: "/assets/image/productos/tv-samsung-55.jpg",
    price: 72999,
    stock: 50,
    categoria: "televisores",
    descripcion:
      'Led Smart. 50" Resolucion Crystal 4K UHD. Potencia de salida de sonido 20W. HDMI x 2. USB x 1. Bluetooth. Wi Fi. Sistema operativo Tizen. Incluye control remoto (one remote). Frecuencia de barrido 60 GHz. HDR.',
  },
  {
    nombre: "SMART TV SAMSUNG 43 PULGADAS FULL HD UN43T5300AGCZB",
    urlImagen: "/assets/image/productos/tv-43.jpg",
    price: 49999,
    stock: 50,
    categoria: "televisores",
    descripcion:
      'Smart TV LED 43" FHD 1920 x 1080. Clean View. Wide Color Enhancer. Wi-Fi integ. SO tizen. Dolby Digital Plus. Sonido 20W RMS. Samsung Cloud. Smart View/Hub. HDMI x 2. USB x 1. HDR. Control remoto. Manual.',
  },
  {
    nombre: "SMART TV TELEFUNKEN 32 PULGADAS HD TK3219K5",
    urlImagen: "/assets/image/productos/tv-43.jpg",
    price: 29999,
    stock: 100,
    categoria: "televisores",
    descripcion:
      'Smart TV de 32" LED. Resolucion HD 1366x768. Entradas HDMI y puertos USB disponibles. Sintonizador TDA. Brillo 220 CD/m2. Parlantes 2 x 5W. WIFI. Frecuencia de barrido 60 Hz. Entradas posteriores de video compuesto y audio analogico. Salida de auriculares. Salida de audio digital optica. Cuenta con Netflix, Youtube, Gestor de aplicaciones, Screen sharing y open browser. Control remoto.      ',
  },
  {
    nombre: "SMART PHILIPS 32 PULGADAS HD 32PHG5813/77",
    urlImagen: "/assets/image/productos/tv-32-phiphs.jpg",
    price: 31999,
    stock: 100,
    categoria: "televisores",
    descripcion:
      "Smart TV | WiFi integrado | Cientos de aplicaciones para navegar y disfrutar | Incluye sintonizador de TV Digital Abierta e interactividad con Ginga.ar | 2 puertos USB con reproduccion multimedia | 2 entradas HDMI | Garantia: 1 ano | Origen: Argentina.        ",
  },
  {
    nombre: "SMART TV BGH 43 PULGADAS FULL HD B4319FK5",
    urlImagen: "/assets/image/productos/tv-43-full-hd-bgh.jpg",
    price: 43333,
    stock: 100,
    categoria: "televisores",
    descripcion:
      'Smart Tv 43". Resolucion 1920x1080. Entradas HDMI: 3 (v2.0) (HDMI 1 ARC). Puertos USB: 2 conectores hembra tipo A (2.0). Salidas de audio: 1 jack estereo 3,5 mm (miniplug). Wi-fi. Incluye: soporte tipo pie x2, guia rapida x1, manual legal x1, bolsa con tornillos para la base x1, control remoto x1 y cable de alimentacion x1.',
  },
  //Celulares
  {
    nombre: "CELULAR SAMSUNG GALAXY Z FOLD SM-F916BZKQARO NEGRO",
    urlImagen: "/assets/image/productos/cel-fold.jpg",
    price: 239999,
    stock: 100,
    categoria: "celulares",
    descripcion:
      'Plegado es un telefono, desplegado es una tablet. Duro en el exterior, flexible en el interior: esta reforzada con Corning Gorilla Glass Victus, el vidrio mas resistente disponible para los telefonos Galaxy. Pantalla 6.2". Al desplegar el telefono se obtiene una pantalla Dynamic AMOLED 2X del tamano de una tableta de 7.6". Rendimiento superior: cuenta con una asombrosa memoria de 12 GB de RAM. Almacenamiento de 256 GB. Cambia de datos moviles a wifi rapidamente. Tecnologia avanzada a traves de UWB, mayor precision de proximidad para compartir fotos y videos. La opcion Point to Share permite compartir contenido apuntando el telefono hacia otro dispositivo. Carga super rapida.',
  },
  {
    nombre: "CELULAR SAMSUNG GALAXY S21+ VIOLETA",
    urlImagen: "/assets/image/productos/s-20-celular.jpg",
    price: 158999,
    stock: 100,
    categoria: "celulares",
    descripcion:
      'Pantalla Dynamic AMOLED 2X de 6.7" . Procesador Octa core. Sistema operativo Android 11. Capacidad de bateria 4800 mAh. Carga en 70 min. USB type C. Capacidad 128 Gb. Ram 8 Gb. Camara posterior 12 + 64 + 12Mp. Flash. Camara frontal 10 Mp. Sensor facial. Control de voz. NFC. Bluetooth 5.0. GPS. Wi FI 802.11 a/b/g/n/ac/ax 2.4G+5GHz, HE80, MIMO, 1024-QAM. Lector de tarjetas. Maxima resolucion UHD 8K (7680 x 4320) 60fps. La caja contiene film protector, pin de expulsion, cable de datos, Guia rapida.      ',
  },
  {
    nombre: "CELULAR SAMSUNG GALAXY A21S SM-A217 BLANCO",
    urlImagen: "/assets/image/productos/cel-a-21m.jpg",
    price: 40999,
    stock: 100,
    categoria: "celulares",
    descripcion:
      '60fps. La caja contiene film protector, pin de expulsion, Celular. Pantalla de 6.5" PLS TFT LCD. Almacenamiento 128 Gb / RAM 4Gb. Procesador Octa- Core 2 Ghz. Camara posterior: 48.0 MP + 8.0 MP + 2.0 MP + 2.0 MP. Camara frontal: 13 MP. Bluetooth 5.0. USB type C. Wifi. Entrada para Micro SD hasta 512 Gb. Radio. Bateria: 5000 mAh. Sistema operativo: Android. Conector Jack de 3.5mm.',
  },
  {
    nombre: "CELULAR SAMSUNG XCOVER PRO SM-G715U NEGRO",
    urlImagen: "/assets/image/productos/cel-xcover-pro-sm.jpg",
    price: 49999,
    stock: 100,
    categoria: "celulares",
    descripcion:
      'Celular de 6.3" TFT 2340 x 1080 (FHD+). Procesador Octa Core (1.7 hasta 2.3 GHz). Camara principal 25 + 8Mp / frontal 13Mp. Capacidad 64Gb / RAM 4Gb. Reproduccion de video FHD (1920 x 1080). Lector de tarjeta Micro SD (expandible hasta 512Gb). USB 2.0 type C. Entrada de 3.5mm. Wi Fi. Bluetooth 5.0. NFC. Sistema operativo Android. Sensores: Accelerometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Proximity Sensor, Virtual Light Sensing. Bateria de 4050mAh.',
  },
  {
    nombre: "CELULAR SAMSUNG A72 AZUL",
    urlImagen: "/assets/image/productos/cel-a72.jpg",
    price: 74999,
    stock: 100,
    categoria: "celulares",
    descripcion:
      'Celular 4G LTE. Procesador Oscta Core. Pantalla 6.7" FHD + Super Amoled. Cuadruple camara trasera 64MP + 12Mp + 8MP + 5MP. Camara frontal 32MP. Memoria RAM 6Gb. Almacenamiento 128Gb. Slot para tarjeta Micro SD h/1Tb. Sonido potente con Dolby Atmos ( 2 parlantes integrados ). Desbloqueo con huella dactilar en pantalla. SO Android 11.0. Wi Fi. Bluetooth V5.0. USB 2.0. NFC. Radio. Bateria 5000MAH. Resistente hasta 1mt de profundidad en agua dulce durante 30 minutos.',
  },
  {
    nombre: "CELULAR SAMSUNG S20 FE AZUL",
    urlImagen: "/assets/image/productos/cel-s20-fe.jpg",
    price: 89999,
    stock: 100,
    categoria: "celulares",
    descripcion:
      'Celular S20 FE pantalla de 6.5" full rectangulo con tecnologia super amoled. Resolucion 1080 x 2400 FHD. Capacidad 128Gb / RAM 6 Gb. Octa core. CPU speed 2.8, 2.4 y 1.8 GHz. Camara trasera 12+12+8MP. Camara trasera 32MP. Reproduccion de video en UHD 4K (3840 x 2160) a 60 fps. Lector de tarjetas Micro SD expandible hasta 1Tb. USB type C. USB 3.2 Gen 1. GPS. Wi Fi 802.11 a/b/g/n/ac/ax 2.4G+5GHz, HE80, MIMO, 1024-QAM. Bluetooth 5.0. NFC. Sistema operativo Android. Sensor de huella digital.',
  },
  {
    nombre: "CELULAR SAMSUNG GALAXY A01 CORE SM-A013M AZUL",
    urlImagen: "/assets/image/productos/cel-galaxy-a01.jpg",
    price: 15999,
    stock: 100,
    categoria: "celulares",
    descripcion:
      '4G LTE. Pant. 5.3". Camaras de 8Mp y 5Mp c/LED flash. Max. resolucion (1920 x 1080). Proc.Quad Core 1.5Ghz. SO Android Go 10.0. Bluetooth 5.0. Micro USB 2.0. Memoria int.16Gb/ RAM 1Gb. Slot p/micro SD h/512Gb. Bateria 3000 mAh.',
  },
  //tablets
  {
    nombre: 'TABLET LENOVO ZA3V0065AR 10" 64 GB GRIS',
    urlImagen: "/assets/image/productos/tablet-lenovo-10.jpg",
    price: 31499,
    stock: 100,
    categoria: "tablet",
    descripcion:
      'Multitouch 10.1" FHD. SO: Android pie 9.0. WiFi. BT 4.2. USB: 1 X Tipo C. Proces Qualcomm Snapdragon 439 de 2.0Ghz. Memoria Ram 4 Gb. Almac. 64 Gb. Micro SD. Resolucion 1920 x 1200. Camara frontal 5.0Mp / Trasera 8.0 Mp. Bateria 1cell 7000MAh.    ',
  },
  {
    nombre: 'TABLET KASSEL SK5501 10" 16GB NEGRO',
    urlImagen: "/assets/image/productos/tablet-kassel.jpg",
    price: 18999,
    stock: 100,
    categoria: "tablet",
    descripcion: "Este producto no posee una descripción",
  },
  {
    nombre: 'TABLET SAMSUNG A7 10.4" 64 GB GRIS',
    urlImagen: "/assets/image/productos/tablet-samsung-a7.jpg",
    price: 39999,
    stock: 100,
    categoria: "tablet",
    descripcion:
      "Con diseño delgado, un sistema de entretenimiento vibrante y un rendimiento excepcional, la nueva A7 es una innovadora y elegante compañera para tu vida. Sumergite de lleno en las cosas que más te gustan y compartí fácilmente tus momentos favoritos. Aprendé, explorá, conectate y mantenete inspirado.",
  },
  {
    nombre:
      'TABLET APPLE IPAD AIR MYFP2LE/A 4TA GENERACION 10.9" 64 GB ROSA ORO',
    urlImagen: "/assets/image/productos/cel-galaxy-a01.jpg",
    price: 15999,
    stock: 100,
    categoria: "tablet",
    descripcion:
      '4G LTE. Pant. 5.3". Camaras de 8Mp y 5Mp c/LED flash. Max. resolucion (1920 x 1080). Proc.Quad Core 1.5Ghz. SO Android Go 10.0. Bluetooth 5.0. Micro USB 2.0. Memoria int.16Gb/ RAM 1Gb. Slot p/micro SD h/512Gb. Bateria 3000 mAh.',
  },
  {
    nombre: "CELULAR SAMSUNG GALAXY A01 CORE SM-A013M AZUL",
    urlImagen: "/assets/image/productos/tablet-apple-4ta.jpg",
    price: 129999,
    stock: 100,
    categoria: "tablet",
    descripcion:
      'Tablet iPad Air (4ta Generacion). Pantalla: 11". Procesador: A14 Bionic. Capacidad de almacenamiento: 64 Gb. RAM 4Gb. Sistema Operativo: IpadOS 14. WIFI. Bluetooth. Video 1080 HP a 60 o 30 f/s. Camara: 12Mp. Multitouch. Pantalla Liquid Retina. Accesorios incluidos: Cable USB-C + Adaptador de corriente USB-C de 20 W. Bateria: 28,6 Wh (3,7V) 7.729 mAh.',
  },
  {
    nombre: 'TABLET SAMSUNG GALAXY TAB S7 FE 12.4" 128 GB NEGRO',
    urlImagen: "/assets/image/productos/tablet-s7.jpg",
    price: 89999,
    stock: 100,
    categoria: "tablet",
    descripcion:
      'Tablet de 12.4" Multitouch TFT 2560 x 1600 (WQXGA). Video FHD (1920 x 1080) 30fps. Bateria 10090 mAh fast charging: 15W support. Procesador SDM 750G (Dual 2.2GHz + Hexa 1.8GHz). Memoria RAM 6 Gb / Capacidad 128GB, Expandible hasta 1TB con tarjeta microSD. 2 Parlantes + Sonido Dolby Atmos. Camara trasera 8MP AF y Frontal 5MP. USB Tipo C 3.0. S Pen (Ble X) in box Reconocimiento facial 2D. Bluetooth 5.2',
  },
  {
    nombre: 'TABLET SAMSUNG S6 10.4" 64 GB GRIS',
    urlImagen: "/assets/image/productos/tablet-s6.jpg",
    price: 61999,
    stock: 100,
    categoria: "tablet",
    descripcion:
      'Pantalla de 10.4" con Book Cover y S Pen. Procesador Octa Core 2.3 GHz + 1.7 GHz. Almacenamiento 64 Gb. Memoria Ram 4 Gb. Camara Frontal 5MP. Trasera: 8MP. Bateria 7040 mAh. Micro Slot SD. USB Type C. SO: Android 10. Accesorios: S PEN.',
  },
  //notebook
  {
    nombre: "NOTEBOOK HDC CY-141N464 INTEL CELERON",
    urlImagen: "/assets/image/productos/note-hdc.jpg",
    price: 36999,
    stock: 100,
    categoria: "notebook",
    descripcion:
      'Notebook - Cloubook. Procesador Intel Celeron N3550. Memoria RAM 4Gb. Almacenamiento 64Gb (Solido). Pantalla LED 14" Full HD. Camara frontal de 0.3MP. Wi Fi. Bluetooth 4.0. USB: 2 x 3.0. Mini HDMI x 1 (1080p). Lector de tarjetas SD. Bateria 5000 mAh. Windows 10.',
  },
  {
    nombre: "NOTEBOOK ENOVA NB142A-WH INTEL CELERON",
    urlImagen: "/assets/image/productos/note-eova.jpg",
    price: 37999,
    stock: 100,
    categoria: "notebook",
    descripcion:
      'Notebook - Cloubook. Procesador Intel celeron N3350. Pantalla HD 14.1". Capacidad 64 Gb/RAM 4 Gb. WiFi. Micro HDMI. USB. Camara web 1.2 MP. S.O: Windows 10. Placa de video Integrada. BT: 4.0. Bateria 4000 mAH.',
  },
  {
    nombre: "NOTEBOOK HP 14-DY0502LA INTEL CORE I3",
    urlImagen: "/assets/image/productos/note-hp14.jpg",
    price: 94999,
    stock: 100,
    categoria: "notebook",
    descripcion:
      "Notebook de 14 HD Pantalla multitactil HD (1366 x 768). bisel micro-edge. 250 nits y 45 por ciento de NTSC. Procesador Intel Core i3-1125G4 de 11 generacion. Almacenamiento: Unidad de estado solido PCle NVMe M.2 de 256 GB - RAM 8 GB de DDR4-3200 (2x4 Gb) (incorporada). Placa de video integrada: Graficos intel UHD. Sistema operativo Windows 10 Home 64. Bateria de polimero de iones de litio de 3 celdas y 43 Wh. Admite carga rapida de la bateria: aproximadamente un 50 por ciento en 45 minutos. Wi Fi. Bluetooth 5.2. Puertos: 1 USB Type-C con SuperSpeed de 10 Gbps Velocidad de senalizacion (suministro de energia mediante puerto USB. DisplayPort 1.4. HP Sleep and Charge) 2 USB Type-A con SuperSpeed de 5 Gbps Velocidad de senalizacion 1 HDMI 2.0 1 Conector inteligente CA 1 combinacion de auriculares y microfono. 1 Lector de tarjetas de medios Micro SD. Camara HD HP Wide Vision de 720p con microfonos digitales integrados de doble matriz. Duracion de bateria hasta 8 horas y 45 min. Software incluido McAfee LiveSafe. Servicios en la nube: Almacenamiento en Dropbox de 100 GB durante 12 meses",
  },
  {
    nombre: "NOTEBOOK WARPTECH CV149W CELERON",
    urlImagen: "/assets/image/productos/note-waprtech.jpg",
    price: 38999,
    stock: 100,
    categoria: "notebook",
    descripcion: "Este producto no posee una descripción",
  },
  {
    nombre: "NOTEBOOK LENOVO 81Y400F1AR INTEL CORE I5",
    urlImagen: "/assets/image/productos/note-intelcore5.jpg",
    price: 169999,
    stock: 100,
    categoria: "notebook",
    descripcion:
      'Pant. 15.6" FHD. Procesador Intel Core I5-10300. SO: Windows 10 Home. Almac 1Tb / RAM 8Gb. Unidad SSD 128Gb. Bateria 3 celdas 45 Whrs internal. Placa de video NVIDIA GEFORCE GTX 1650 4GB GDDR6. WiFi. BT: 5.0. USB: 2 x 3.2 Gen 1 / 1 x 3.2 Tipo - C Gen 1.',
  },
  {
    nombre: "NOTEBOOK GAMER MSI 4719072771157 15 A4DCR-264AR AMD",
    urlImagen: "/assets/image/productos/note-gamer.jpg",
    price: 284999,
    stock: 100,
    categoria: "notebook",
    descripcion:
      'Notebook de 15.6" FHD 1920 x 1080 IPS 60Hz. Procesador AMD Ryzen 5 4600H. Placa de video RX5300M/3gb-GDDR6. Bateria 51WHrs. Bluetooth 5.1. Capacidad 256 Gb / RAM 8 Gb. 2 USB 3.2. 2 USB 3.2 tipo C. Wi Fi 802,11a/b/c/g/n/AC. HDMI. Camara frontal 720p. Sistema opeartivo windows 10 home plus. Microfono incorporado. Entrada para microfono.',
  },
  {
    nombre: "NOTEBOOK ASUS X515JA-BQ128 INTEL CORE I5",
    urlImagen: "/assets/image/productos/note-asus-51.jpg",
    price: 104999,
    stock: 100,
    categoria: "notebook",
    descripcion:
      'Notebook de 15.6" IPS level FHD (1920 x 1080) 16:9. Procesador Intel Core i5-1035G1. Placa de video Intel UHD graphics. Capacidad 256GB M.2 NVMe PCIe 3.0 SSD / RAM 4GB DDR4 on board + 4GB DDR4 SO-DIMM. Bateria 2 cell Li-ion. Lector de tarjetas SD. Bluetooth 4.1. Teclado numerico. 1 USB 3.2 Gen 1 Type A. 1 USB 3.2 Gen 1 type C. 2 USB 2.0 type A. Wi fi. HDMI. Camara frontal 720p. Microfono incorporado. Entrada para microfono. No tiene sistema operativo.',
  },
];


// export default function SumarItems (){
//   // Add a new document with a generated id
  
//     const dbQuery = getFirestore();

 
// useEffect(() => {
//   data.map(item => {
//     const container = {};
//     container.nombre = item.nombre;
//     container.urlImagen= item.urlImagen;
//     container.price=item.price;
//     container.categoria=item.categoria
//     container.descripcion=item.descripcion
//     container.stock=item.stock

//   dbQuery
//   .collection("items").doc().set(container);
// })
// }, [dbQuery])
//     console.log('items cargados')
//   }
  