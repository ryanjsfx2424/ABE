from PIL import Image

fname = "logo@2x.png"
img = Image.open(fname)
img = img.convert("RGBA")

data = img.getdata()

newData = []

for item in data:
  if item[3] != 0:
    newData.append((255,255,255,item[3]))
  else:
    newData.append(item)

img.putdata(newData)
img.save("logo@2x-white.png")
