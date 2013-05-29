module PostsHelper
  def previous (id)
    Post.where(["id < ?", id]).last
  end

  def next_post (id)
    Post.where(["id > ?", id]).first
  end

end
