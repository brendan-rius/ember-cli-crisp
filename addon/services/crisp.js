import Ember from "ember";

export default Ember.Service.extend({
  init() {
    this._super();

    const isFastBoot = typeof FastBoot !== 'undefined';

    if (!this.hasCrisp() && (this.config && this.config.environment !== 'test') && !isFastBoot) {
      Ember.Logger.warn('Crisp is not loaded yet');
    }
  },

  hasCrisp() {
    return !!window.$crisp;
  },

  /**
   * Call a Crisp event with arguments if Crisp is activated
   * @private
   */
  _call() {
    if (this.hasCrisp()) {
      return $crisp.do(...arguments);
    }
  },

  open() {
    this._call("chat:open");
  },

  close() {
    this._call("chat:close");
  },

  toggle() {
    this._call("chat:toggle");
  },

  sendMessage(type, content) {
    this._call("message:send", [type, content]);
  },

  isOpen() {
    return this._call("chat:opened");
  },

  isClosed() {
    return this._call("chat:closed");
  },

  isVisible() {
    return this._call("chat:visible");
  },

  isSmall() {
    return this._call("chat:small");
  },

  isLarge() {
    return this._call("chat:large");
  },
});
