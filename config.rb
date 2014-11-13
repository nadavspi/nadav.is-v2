require "custom_helpers"
activate :custom_helpers

require 'modular-scale'

set :markdown_engine, :redcarpet
set :markdown, :smartypants => true, :footnotes => true

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
end
activate :directory_indexes

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.name = "writing"
  blog.prefix = "writing"
  blog.permalink = "{title}.html"
  # Matcher for blog source files
  blog.sources = "{year}-{month}-{day}-{title}.html"
  # blog.taglink = "about/{tag}.html"
  blog.layout = "article_layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  # blog.tag_template = "tag.html"
  # blog.calendar_template = "calendar.html"

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

activate :blog do |blog|
  blog.name = "reading"
  blog.prefix = "reading"
  blog.permalink = "{title}.html"
  blog.sources = "{title}.html"
  blog.layout = "book_layout"
end

configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :imageoptim

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
