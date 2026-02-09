from PIL import Image
import math

def distance(c1, c2):
    (r1, g1, b1) = c1
    (r2, g2, b2) = c2
    return math.sqrt((r1 - r2)**2 + (g1 - g2)**2 + (b1 - b2)**2)

def remove_background_tolerance(input_path, output_path, tolerance=100):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    # Sample top-left pixel as background reference
    bg_color = datas[0][:3] 
    print(f"Detected background color: {bg_color}")

    newData = []
    for item in datas:
        # Check color distance
        curr_color = item[:3]
        dist = distance(curr_color, bg_color)
        
        if dist < tolerance:
            newData.append((255, 255, 255, 0)) # Transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved cleaned image to {output_path}")

input_file = "/Users/rounakazad/.gemini/antigravity/brain/10156217-b824-42ba-b8b5-d2d1cc4a3f20/self_photo_greenscreen_1770311755664.png"
output_file = "/Users/rounakazad/.gemini/antigravity/brain/10156217-b824-42ba-b8b5-d2d1cc4a3f20/self_photo_final_v2.png"

remove_background_tolerance(input_file, output_file, tolerance=120)

