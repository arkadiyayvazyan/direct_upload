require 'open3'

class YoutubeDownloader
    def self.download(url)
        cmd = "youtube-dl -x --audio-format mp3 --embed-thumbnail --newline \"#{url}\""
        Open3.popen3(cmd) do |stdout, stderr, status, thread|
            while line=stderr.gets do
                prog_percent = line[/\d*.\d%/]
                unless prog_percent.nil? 
                    ActionCable.server.broadcast("progress", prog_percent.chop.to_i)
                end
            end
        end
    end
end

#YoutubeDownloader.download("https://www.youtube.com/watch?v=Nobxw1SzxVM")