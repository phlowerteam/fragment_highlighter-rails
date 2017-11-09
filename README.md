# fragment_highlighter-rails
JavaScript UI library for highlighting text fragments on page and saving ones into localStorage

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'fragment_highlighter-rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install fragment_highlighter-rails

## Usage

#application.css

    @import "bootstrap-sprockets";
    @import "bootstrap";
    *= require 'fragment-highlighter'

#application.js

    //= require jquery
    //= require bootstrap-sprockets
    //= require fragment-highlighter/fragment-highlighter.js

    $(function() {
      let allowedPages = ['/articles/'];
      new FragmentHighlighter(allowedPages);
    });

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/fragment_highlighter-rails.
