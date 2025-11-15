 const carData = [
  {
    id: 1,
    name: "Audi A6",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/AudiA6.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "7,000" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "9,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "14,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "21,000" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "1,750" },
      { label: "Extra Per Km / Outstation Rate", value: "70" },
      { label: "Drivers DA/TA (per Day)", value: "700" }
    ]
  },
  {
    id: 2,
    name: "Audi Q7",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Audi-Q7.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "9,000" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "11,500" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "22,000" },
      { label: "Extra Per Km / Outstation Rate", value: "90" },
      { label: "Drivers DA/TA (per Day)", value: "1,000" }
    ]
  },
  {
    id: 3,
    name: "Mercedes E Class",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Mercidies-E-Class.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "7,000" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "9,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "14,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "21,000" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "1,750" },
      { label: "Extra Per Km / Outstation Rate", value: "70" },
      { label: "Drivers DA/TA (per Day)", value: "700" }
    ]
  },
  {
    id: 4,
    name: "Mercedes S Class",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Mercidies-S-Class.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "13,500" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "15,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "20,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "30,000" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "2,500" },
      { label: "Extra Per Km / Outstation Rate", value: "125" },
      { label: "Drivers DA/TA (per Day)", value: "1,000" }
    ]
  },
  {
    id: 5,
    name: "Mercedes GLS 450",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Mercidies-GLS-450.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "13,500" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "15,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "20,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "30,000" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "2,500" },
      { label: "Extra Per Km / Outstation Rate", value: "125" },
      { label: "Drivers DA/TA (per Day)", value: "1,000" }
    ]
  },
  {
    id: 6,
    name: "Jaguar XF",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Jaguar-XF.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "7,500" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "11,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "15,200" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "22,800" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "1,900" },
      { label: "Extra Per Km / Outstation Rate", value: "80" },
      { label: "Drivers DA/TA (per Day)", value: "700" }
    ]
  },
  {
    id: 7,
    name: "Jaguar XF R",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Jaguar-XF-R.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "7,500" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "11,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "15,200" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "22,800" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "1,900" },
      { label: "Extra Per Km / Outstation Rate", value: "80" },
      { label: "Drivers DA/TA (per Day)", value: "700" }
    ]
  },
  {
    id: 8,
    name: "Defender",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Defender.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "16,000" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "21,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "30,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "40,200" },
      { label: "Extra Per Km / Outstation Rate", value: "200" },
      { label: "Drivers DA/TA (per Day)", value: "1,000" }
    ]
  },
  {
    id: 9,
    name: "Toyota Land Cruiser",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Toyota-Land-Cruiser.png",
    prices: [
      { label: "Full Day Charges", value: "60,000" }
    ]
  },
  {
    id: 10,
    name: "BMW 530i",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/BMW-5301.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "7,000" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "9,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "14,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "21,000" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "1,750" },
      { label: "Extra Per Km / Outstation Rate", value: "70" },
      { label: "Drivers DA/TA (per Day)", value: "700" }
    ]
  },
  {
    id: 11,
    name: "Toyota Vellfire",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Toyota-Vellfire.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "20,000" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "24,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "28,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "42,000" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "3,500" },
      { label: "Extra Per Km / Outstation Rate", value: "200" },
      { label: "Drivers DA/TA (per Day)", value: "1,000" }
    ]
  },
  {
    id: 12,
    name: "Force Urbania",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Force-Urbania.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "5,000" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "6,500" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "10,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "15,000" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "1,000" },
      { label: "Extra Per Km / Outstation Rate", value: "60" },
      { label: "Drivers DA/TA (per Day)", value: "500" }
    ]
  },
  {
    id: 13,
    name: "Maserati Gran Turismo",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Maserati-Gran-Turismo.png",
    prices: [
      { label: "City Transfer (4hrs/60Kms)", value: "1,00,000" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "1,00,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "2,00,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "3,00,000" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "5,000" },
      { label: "Drivers DA/TA (per Day)", value: "1,000" }
    ]
  },
  {
    id: 14,
    name: "Vintage Car For Wedding",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Vintage-car-for-wedding.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "51,000" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "51,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "71,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "81,000" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "4,000" },
      { label: "Extra Per Km / Outstation Rate", value: "375" },
      { label: "Drivers DA/TA (per Day)", value: "1,000" }
    ]
  },
  {
    id: 15,
    name: "Range Rover Velar",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Range-Rover-Velar.png",
    prices: [
      { label: "Full Day Charges", value: "51,000" }
    ]
  },
  {
    id: 16,
    name: "BMW i7",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/BMW-i7.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "16,000" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "18,000" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "22,000" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "33,000" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "2,750" },
      { label: "Extra Per Km / Outstation Rate", value: "180" },
      { label: "Drivers DA/TA (per Day)", value: "1,000" }
    ]
  },
  {
    id: 17,
    name: "Toyota Innova Hycross",
    img: "https://luxurycardrive.in/wp-content/uploads/2024/12/Toyota-Innova-Hucross.png",
    prices: [
      { label: "City Transfer (2Hrs/40Kms)", value: "2,200" },
      { label: "Outside City Transfer (4Hrs/60Kms)", value: "2,900" },
      { label: "Local 8 Hours – 80 Kms (Day Use)", value: "3,900" },
      { label: "Local 12 Hours – 120 Kms (Full Day)", value: "4,800" },
      { label: "Extra Hour (Local – Including 10 Km)", value: "1,200" },
      { label: "Extra Per Km / Outstation Rate", value: "25" },
      { label: "Drivers DA/TA (per Day)", value: "700" }
    ]
  }
];

export default carData;