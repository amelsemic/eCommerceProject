
export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number / 100)
  }

export const getUniqueValues = () => {}


/* 
export const products = [
    {
    "id": "recZkNf2kwmdBcqd0",
    "name": "accent chair",
    "price": 25999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/h88qaBBkw6Gtl3-Z5EE8Uw/jQYaH0kNBjqX9oqA2OFNeZcdyuS84wQujpeQZ8Kgq_A9BflmtN4efG1iR_MI9gv0CeJ1d_E_IHN8AKXVQbeakA/QqDhnKq1D1DevqkpeedPMFWDMPJp_KktX1gTxeCww5I",
    "colors": [
    "#ff0000",
    "#00ff00",
    "#0000ff"
    ],
    "company": "marcos",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office",
    "shipping": true
    },
    {
    "id": "recEHmzvupvT8ZONH",
    "name": "albany sectional",
    "price": 109999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/LsBjiJ8e4cbulY3vGqVtfQ/UXux3JOyS2geZE8xmguzt38Q4qqya-sWXZ8vxQvyD2XAm3otSLVponZT9JyDINbR4Xb84XN5ePl_QqGgJ0QCPQ/1sX4Q1k2lgJBgISZriv7JRdrUFwg0ly5OAApuLj3Ws8",
    "colors": [
    "#000",
    "#ffb900"
    ],
    "company": "liddy",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "living room"
    },
    {
    "id": "rec5NBwZ5zCD9nfF0",
    "name": "albany table",
    "price": 309999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/SE3CrDEyc6L6iSBwgf_ZXQ/QIp3vVDXsRmb4aESUsqS-TgrzFDnwQOTT7UFZ4wSbrTzOslutdOp-0OTQc5GZFsM7ByUFT9Q9SBBUc5IK_S-DA/_jfOtrmWzQjI1ACYQy_rCRBsiH-mN_-7fEai5VQZuxM",
    "colors": [
    "#ffb900",
    "#0000ff"
    ],
    "company": "liddy",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "kitchen"
    },
    {
    "id": "recd1jIVIEChmiwhe",
    "name": "armchair",
    "price": 12599,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/VSh0NFL3HDLkZJBjDLAGGw/p1Ke7dYbFwHZvDnWYg_Xl0lalqgsexemdiu6KqYJPkXs2WM34glQmiO-bwBSyYGuaLQ8tY5wTsYT_7Cwte-YiA/byRIhPZlg1Wl5bqc18AvNcjK5kGktPQ8OGEF7Xji-JA",
    "colors": [
    "#000",
    "#00ff00",
    "#0000ff"
    ],
    "company": "marcos",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "bedroom",
    "shipping": true
    },
    {
    "id": "recoM2MyHJGHLVi5l",
    "name": "bar stool",
    "price": 4099,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/hBmDSg6lKzkra7l7xtTHMw/L0WZPh3T1lJkBTzsnuCFGdog1foykxRBGkncWSILnEDxTGmmXOUcXuL-wc_Ics0gvNiz-hi8Vk7RM3-5Cx0r2w/tu-ZQu96Pxq39MFtFxJU8KGQeWFWwf6_m_wf6T04-P0",
    "colors": [
    "#000"
    ],
    "company": "liddy",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "dining",
    "shipping": true
    },
    {
    "id": "recotY5Nh00DQFdkm",
    "name": "dining table",
    "price": 42999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/C5WHk5vlRTvcR-qR3D_STA/hPKLWPZQEbExJQS1zW7Qny2QplCQnwCCoJUeroi06VmwlvyISZ3zGeAkybHauvL4FRrBVTi5pzQS0nWFZSKIeg/NGaQHTAqYEcqKGpB1GqWbSJ-g-bg55iB1QjXnt59FEs",
    "colors": [
    "#00ff00",
    "#0000ff",
    "#ff0000"
    ],
    "company": "ikea",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "dining",
    "shipping": true
    },
    {
    "id": "rec1Ntk7siEEW9ha1",
    "name": "emperor bed",
    "price": 23999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/M9kLMl0KK4ekN5Yz_T3oqQ/8w83h2ZfcY8XvHoAcv5XcADZXGaoJxpsGSuB3Hhs_fjjC81fXBaj99LIot8vwXkf-d8zAcDCXinYQB1TGzVtpw/4LLT2tawv2YKeGQECbseW5CXLnQWfWkYnIwFnZjyxH4",
    "colors": [
    "#0000ff",
    "#000"
    ],
    "company": "ikea",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "bedroom",
    "shipping": true
    },
    {
    "id": "recNZ0koOqEmilmoz",
    "name": "entertainment center",
    "price": 59999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/ZYyKLwZ0R2QrGgJsYfiu1g/Jm3oWKaWuP26ULqEKbc12gD01hspuU9GOs1K1FTBF7BpaeEcN9XOOWQKtYD1wJSF-5aXfFVlRFIdE8Trt2HXqg/iim3kx6E0nBnaFfNJu7KJIZfuDWPGf0NauI7IfMvjYY",
    "featured": true,
    "colors": [
    "#000",
    "#ff0000"
    ],
    "company": "caressa",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "living room",
    "shipping": true
    },
    {
    "id": "recrfxv3EwpvJwvjq",
    "name": "high-back bench",
    "price": 39999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/S9rSopUGZ8f98Nu1JI2YEA/KUD6lBd4KdL6zRCuDs_aVJjMA_dcwHLoIuFKNZTk5NYw5znB5T3OeOUNkBr-5UeTAX0vx35BzVX6NiLVqreXXQ/ey82WKcu5opdHn95oO__a1MjPnbP_z8QeW_vecANZeI",
    "featured": true,
    "colors": [
    "#000",
    "#00ff00"
    ],
    "company": "ikea",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office",
    "shipping": true
    },
    {
    "id": "recoW8ecgjtKx2Sj2",
    "name": "leather chair",
    "price": 20099,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/WwHxj_CmekcUGFm54dvDFQ/36KzSFkgCm_ZMEoCLf7ipeFenUa9-z94RDkYBOKSIWJ5FFSuOduSpNUveEfcpPH1tugp8LUvFdLmblBDsb_byA/f9SxMv3GYoLykknehaEfZtb64gZ6Z1iPNC1hkropuoQ",
    "colors": [
    "#ff0000",
    "#ffb900",
    "#00ff00"
    ],
    "company": "caressa",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "bedroom"
    },
    {
    "id": "recEOA6qtDag1hRbU",
    "name": "leather sofa",
    "price": 99999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/zCYTE4CD-gx9kePayTe7iQ/0gKSxh2n7wM2hIOh0Ll2JtCNSMgXKcj4nh9cCuIyfaMcuQX_co_LyH6x874NQ9s8FXikMbsNdkftO1MPwqheaA/o0FXbdPQ0DAtS3CrehrIA1X50G_ImOTKv5_S_Cz6974",
    "colors": [
    "#00ff00",
    "#0000ff"
    ],
    "company": "caressa",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office"
    },
    {
    "id": "recoAJYUCuEKxcPSr",
    "name": "modern bookshelf",
    "price": 31999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/j26pKY6HFH1ZC3C5cpXBTQ/lAJ96cZDttw_2zETrQaM9nFOdti2grhZPGJC9sZA4vuhPPu5qKVNaYN4FxzkG87seET3uR1Ij5Bj_kO_9GpdaA/rcu037DSLKbP6mqE-C1gq2K--LEqDF6F4aJhIPGCFko",
    "featured": true,
    "colors": [
    "#ffb900",
    "#ff0000",
    "#00ff00"
    ],
    "company": "caressa",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "kids"
    },
    {
    "id": "recQ0fMd8T0Vk211E",
    "name": "modern poster",
    "price": 3099,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/2dif5mSBQBGhBVMNvIs6gA/BZWnHMUa4b5ypU8-UdZu2CoHgGQ0rAwf0NHQ3azCe_lRJySHDn22bboiur964b3_OS70Su22SVn8ALDXb_kTSA/7dfI9DbUOg9xikSWiNdaUI9ta4SuIAo_Y7uJ4waQwJc",
    "colors": [
    "#000"
    ],
    "company": "liddy",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "living room",
    "shipping": true
    },
    {
    "id": "rec7CjDWKRgNQtrKe",
    "name": "shelf",
    "price": 30999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/5sZyjvgmvxZj4aUg1En12A/4EGzgu72wjYGb9PjjaWYcnMw3-7y4D-CTUMWaKLR0LguWkgGmWxjrhlLyxs7LVokCOu5bgMj8809GB0DT-vacQ/Vj2Bf19tHKAp0lsThblaldHn7HFaAW_V5IzxQYgur88",
    "colors": [
    "#00ff00"
    ],
    "company": "ikea",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "living room"
    },
    {
    "id": "recF0KpwlkF7e8kXO",
    "name": "simple chair",
    "price": 109999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/6n4Uh2WjBhNe5aZYW2ETWg/EIFiTgXqSAln6LPTDe9MhRYXcLLgAKHjpAzc78088-xCRYDvjz4FTooFsBz2jlTpXqKouOKMbd7AO0GfrxszlA/fJ8hbL4Kjx8Q2a0WQt3YWqZ6SL029CmtIU7ZbQOhIn0",
    "colors": [
    "#0000ff"
    ],
    "company": "liddy",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "living room",
    "shipping": true
    },
    {
    "id": "recs5BSVU3qQrOj4E",
    "name": "sofa set",
    "price": 129999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/t4DZ3gKjC57TZySIfUGzJQ/r3gZlFEiKNmaAXrjkMId_SHgg6filaO3g1udBXNjcKHKBD45Mf0W1L8e2C4-DNutv2GlAVGrsBK1W8y2ROnbVA/RP5JqM6A3vu7Z9e39a9cHMRvS27wC2gCVGdKpCni4rU",
    "colors": [
    "#00ff00",
    "#ffb900"
    ],
    "company": "marcos",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "living room",
    "shipping": true
    },
    {
    "id": "recroK1VD8qVdMP5H",
    "name": "suede armchair",
    "price": 15999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/RQXJGsoiA-py9NjcPcUUOw/TuQbLFje0PSAap-Xw76z0hYTGn7nwA-ITNDHuSMZa3KiyHTapyuz2D-6OvkFbtDgG1FSOGS3qAkNuwkNxaqj2w/3EwqWa2g1Rw4ucviaxMhTrmq0qLNyuNJ51T4UHIIqDg",
    "colors": [
    "#ffb900"
    ],
    "company": "caressa",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office"
    },
    {
    "id": "rec7JInsuCEHgmaGe",
    "name": "utopia sofa",
    "price": 79999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/IcuR_F5D4O4DkU0u2FY6mA/OXotMCfJN1kIq32zOF_SFAHM2xcWsM3FAgRJAipNzZYMTerjmsLGTA8WbdfhgfQbC8fFtvnT48HWdzjS80LPRQ/iBxZN0Xda_UzGCkiLUY8z9M1fM29oh6pTP3q47tRWCw",
    "featured": true,
    "colors": [
    "#ff0000",
    "#00ff00"
    ],
    "company": "liddy",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "living room"
    },
    {
    "id": "rec3jeKnhInKHJuz2",
    "name": "vase table",
    "price": 120999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/sE-wUOx8OMyRnKHhrP5pOw/wPb5ANbwmXXNkrFM84UpPvVIL01RYqGJFStqoGzKInjVVF-XbMm9AtHU7NAUDOAfeKCk5eZiahXb04RBnguTVQ/D9Z1iWsw3GEq_9_8nYCV6buRK0C6_6ethBX-DZujRwM",
    "featured": true,
    "colors": [
    "#ff0000"
    ],
    "company": "marcos",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office"
    },
    {
    "id": "recv2ohxljlK2FZO7",
    "name": "wooden bed",
    "price": 250099,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/milKu2fgEOBiocaf4awtjw/tZfY2qirh0wl1Kc_dWKj-amUFVhDDyNo3tJS65Tj1mXCDkMTp3fr7VOPG4JRNTkxIMAsLwiZ_cIdvB_nue3GOA/o9v-kEN5AXQC-vNxGCp6tbVM9aCUMDM2loR6xJMCwfA",
    "colors": [
    "#000",
    "#ffb900"
    ],
    "company": "ikea",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "bedroom"
    },
    {
    "id": "recJIjREF3dlFi3sR",
    "name": "wooden desk",
    "price": 150999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/dzSc7NTdBMSeU3cgYHJBYw/ZqSYRL7LOZ5aA6HDqElEZc46BW7TX97eDD7xqNTMnEahNKriAwD0_tBvYRH2NDlZdJHjjUK5lWy_YzTCD2jcFQ/5LNjHo1GqChytWa7joJVS1ahF5EiiiiWmnkplPb0r_M",
    "colors": [
    "#000"
    ],
    "company": "ikea",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office",
    "shipping": true
    },
    {
    "id": "recm7wC8TBVdU9oEL",
    "name": "wooden desk",
    "price": 40099,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/iMeUIMcY81XEYYeoDje_7Q/BDmdnxrnl9uHVVgBeLPw9Ud8iELlcHKRcFT3J8bHTtFtDIFYhi-fiV4rWhCrOP2pVpPo5MOW88f1OtGV9nN9dg/T15hesW81KVldrJjnlL5RM1WAslhj8siMSG5Y9UB1PQ",
    "colors": [
    "#0000ff",
    "#00ff00"
    ],
    "company": "ikea",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office"
    },
    {
    "id": "rectfNsySwAJeWDN2",
    "name": "wooden table",
    "price": 234999,
    "image": "https://v5.airtableusercontent.com/v1/11/11/1669989600000/zGP85FWCWkZhlS7iy3kkJw/pOu7T7ckyUOhivF1ZAaTMacxJ4XgwXN8yI6nAaVGDPIOWMj0d7OikWqEH3xr-cWgWV2D2THTu9fvPLpQ7Qyy9A/d_iBptxnYbjzPCvpfIIKEcjcK5PkI-mlqsl-4X0fn0E",
    "featured": true,
    "colors": [
    "#ffb900",
    "#ff0000"
    ],
    "company": "caressa",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "kitchen",
    "shipping": true
    }
    ]  */