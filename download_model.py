from keras import applications


model = applications.mobilenet.MobileNet()
model.save('./mobilenet-model.h5')
