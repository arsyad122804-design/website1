import os
from PIL import Image
import imagehash

img_dir = 'assets/images'
files = [f for f in os.listdir(img_dir) if f.endswith('.jpg')]

hashes = {}
for f in files:
    try:
        path = os.path.join(img_dir, f)
        img = Image.open(path)
        h = str(imagehash.average_hash(img))
        if h in hashes:
            hashes[h].append(f)
        else:
            hashes[h] = [f]
    except Exception as e:
        pass

for h, flist in hashes.items():
    if len(flist) > 1:
        print(f'Duplicates: {flist}')
