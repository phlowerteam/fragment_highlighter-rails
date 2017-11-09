# coding: utf-8
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "fragment_highlighter/rails/version"

Gem::Specification.new do |spec|
  spec.name          = "fragment_highlighter-rails"
  spec.version       = FragmentHighlighter::Rails::VERSION
  spec.authors       = ["PhlowerTeam"]
  spec.email         = ["phlowerteam@gmail.com"]

  spec.summary       = %q{JavaScript UI library for highlighting text fragments on the page and saving ones into localStorage}
  spec.homepage      = "https://github.com/phlowerteam/fragment_highlighter-rails"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.15"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "bootstrap-sass", "~> 3.3.5"
  spec.add_development_dependency "jquery-rails"
end
