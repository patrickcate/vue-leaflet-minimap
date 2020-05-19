module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        externals: [
          {
            leaflet: {
              root: 'L',
              commonjs2: 'leaflet',
              commonjs: 'leaflet',
            },
          },
          { vue: 'vue' },
          { 'vue2-leaflet': 'vue2-leaflet' },
          { 'leaflet-minimap': 'leaflet-minimap' },
        ],
      }
    }
  },
}
