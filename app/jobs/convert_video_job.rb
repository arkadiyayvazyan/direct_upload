class ConvertVideoJob < ApplicationJob
  queue_as :default

  def perform()
    # Do something later
    for x in 1..100
      sleep 0.1
      ActionCable.server.broadcast("progress", x )
    end
  end
end
