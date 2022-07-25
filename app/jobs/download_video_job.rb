class DownloadVideoJob < ApplicationJob
  queue_as :default

  def perform(url)
    YoutubeDownloader.download(url)
  end
end
