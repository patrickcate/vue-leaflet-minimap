<script>
import { DomEvent } from 'leaflet'
import { findRealParent, propsBinder } from 'vue2-leaflet'
import MiniMap from 'leaflet-minimap'

export default {
  name: 'VueLeafletMinimap',
  props: {
    layer: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      ready: false,
    }
  },
  beforeDestroy() {
    this.parentContainer.removeLayer(this)
    this.mapObject.remove()
  },
  mounted() {
    this.mapObject = new MiniMap(this.layer, this.options)
    DomEvent.on(this.mapObject, this.$listeners)
    propsBinder(this, this.mapObject, this.$options.props)

    this.ready = true
    this.parentContainer = findRealParent(this.$parent)
    this.mapObject.addTo(this.parentContainer.mapObject)

    this.$nextTick(() => {
      /**
       * Triggers when the component is ready
       * @type {object}
       * @property {object} mapObject - reference to leaflet map object
       */
      this.$emit('ready', this.mapObject)
    })
  },
  methods: {
    changeLayer(layer) {
      this.mapObject.changeLayer(layer)
    },
    minimize() {
      this.mapObject.minimize()
    },
    restore() {
      this.mapObject.restore()
    },
    toggle() {
      this.mapObject.toggle()
    },
  },
  render: function (h) {
    if (this.ready && this.$slots.default) {
      return h('div', { style: { display: 'none' } }, this.$slots.default)
    }
    return null
  },
}
</script>
