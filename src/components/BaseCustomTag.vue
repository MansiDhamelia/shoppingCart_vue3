<script>
import { h } from "vue";
export default {
  props: {
    tag: {
      type: String,
      default: "button",
    },
  },

  setup(props, { slots, attrs }) {
    return () => h(`${props.tag}`, slots, attrs);
  },
};
</script>
