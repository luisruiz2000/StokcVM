const paths = {
  grid: 'M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z',
  box: 'm21 8-9-5-9 5 9 5 9-5Zm-18 5 9 5 9-5M3 8v8l9 5 9-5V8',
  chart: 'M4 19V5m0 14h16M8 16v-3m4 3V8m4 8v-6',
  settings: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-12v2m0 13v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M1.5 12h2m17 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  search: 'm21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z',
  plus: 'M12 5v14M5 12h14',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4',
  edit: 'm4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5 4 16.5ZM14.5 6 18 9.5',
  trash: 'M5 7h14m-9 4v6m4-6v6M9 7V4h6v3m-9 0 1 13h10l1-13',
  cart: 'M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
}

export default function Icon({ name }) {
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>
}
