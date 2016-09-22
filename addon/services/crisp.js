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

  _callDo() {
    if (this.hasCrisp()) {
      return window.$crisp.do(...arguments);
    }
  },

  _callIs() {
    if (this.hasCrisp()) {
      return window.$crisp.is(...arguments);
    }
  },

  _callSet() {
    if (this.hasCrisp()) {
      return window.$crisp.set(...arguments);
    }
  },

  _callGet() {
    if (this.hasCrisp()) {
      return window.$crisp.get(...arguments);
    }
  },

  open() {
    this._callDo("chat:open");
  },

  close() {
    this._callDo("chat:close");
  },

  toggle() {
    this._callDo("chat:toggle");
  },

  show() {
    this._callDo("chat:show");
  },

  hide() {
    this._callDo("chat:hide");
  },

  sendMessage(type, content) {
    this._callDo("message:send", [type, content]);
  },

  isOpen() {
    return this._callIs("chat:opened");
  },

  isClosed() {
    return this._callIs("chat:closed");
  },

  isVisible() {
    return this._callIs("chat:visible");
  },

  isSmall() {
    return this._callIs("chat:small");
  },

  isLarge() {
    return this._callIs("chat:large");
  },

  isAvailable() {
    return this._callIs("website:available");
  },

  getIdentifier() {
    return this._callGet("session:identifier");
  },

  getData(key) {
    return this._callGet("session:data", key);
  },

  getEmail() {
    return this._callGet("user:email");
  },

  getNickname() {
    return this._callGet("user:nickname");
  },

  setData(key, value) {
    return this._callSet("session:data", [key, value]);
  },

  setEmail(email) {
    return this._callSet("user:email", email);
  },

  setNickname(nickname) {
    return this._callSet("user:nickname", nickname);
  },
});
