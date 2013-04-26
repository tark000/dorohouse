class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to :back, notice: "Logged in!"
    else
      flash.now.alert = "Email or password is invalid"
      redirect_to :back, notice: "Email or password is invalid"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to :back, notice: "Logged out!"
  end
end
