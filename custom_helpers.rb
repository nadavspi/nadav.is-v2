class CustomHelpers < Middleman::Extension
  def initialize(app, options_hash={}, &block)
    super
  end

  helpers do
    def nav_link(link_text, url, options = {})
      options[:class] ||= ""

      # current_page.url for tags, chomp for pretty main nav links
      if url == current_page.url || url == current_page.url.chomp('/')
        options[:class] << " active"
      end

      link_to(link_text, url, options)
    end
  end
end
::Middleman::Extensions.register(:custom_helpers, CustomHelpers)
