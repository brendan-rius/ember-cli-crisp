# Ember-cli-crisp

[Crisp](https://crisp.im/en/) integration for Ember.

## Installation

```bash
ember install ember-cli-crisp
```

## Configuration

Place this in your `config/environment.js`:

```javascript
ENV['crisp'] = {
  WEBSITE_ID: 'YOUR_WEBSITE_ID_HERE'
};
```

You can get your website ID here by getting your chatbox code here : https://app.crisp.im/settings/websites

The code should look like: 

```
<script type="text/javascript">CRISP_WEBSITE_ID = "8aaaaac5-e1f7-4443-9f83-2545361580ft";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.im/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
```

Here, `8aaaaac5-e1f7-4443-9f83-2545361580ft` is the website ID.

## Usage

The addon creates a service named `crisp` that you can use like so:

```javascript
import Ember from "ember";
import ScrollMixin from "forwardable-frontend/mixins/scroll-mixin";

export default Ember.Controller.extend(ScrollMixin, {
  crisp: Ember.inject.service(),

  actions: {
    myAction() {
      this.get('crisp').open();
    }
  }
});

```

The defined methods are:

 * toggle()
 * sendMessage(type, content)
 * isOpen()
 * isClosed()
 * isVisible()
 * isSmall()
 * isLarge()
 * isAvailable()
 * isLarge()
 * getIdentifier()
 * getData(key)
 * getEmail()
 * getNickname()
 * setData(key , value)
 * setEmail(email)
 * setNickname(nickname)

[see more details in the official documentation.](https://help.crisp.im/answer/which-crisp-events-are-available/)
 
More to come soon.
