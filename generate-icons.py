#!/usr/bin/env python3
"""
Script para generar iconos de PWA en diferentes tamaños
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Tamaños de iconos necesarios para PWA
ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

def create_base_icon(size=512):
    """Crea un icono base con diseño de árbol/teca"""
    # Crear imagen con fondo verde esmeralda
    img = Image.new('RGB', (size, size), '#059669')
    draw = ImageDraw.Draw(img)
    
    # Calcular dimensiones proporcionales
    center_x = size // 2
    center_y = size // 2
    
    # Dibujar un árbol estilizado (tronco y copa)
    trunk_width = size // 8
    trunk_height = size // 3
    trunk_x = center_x - trunk_width // 2
    trunk_y = center_y + size // 6
    
    # Tronco (marrón)
    draw.rectangle(
        [trunk_x, trunk_y, trunk_x + trunk_width, trunk_y + trunk_height],
        fill='#8B4513'
    )
    
    # Copa del árbol (círculos superpuestos - más oscuro)
    foliage_radius = size // 4
    
    # Círculo central
    draw.ellipse(
        [center_x - foliage_radius, center_y - foliage_radius - size // 8,
         center_x + foliage_radius, center_y + foliage_radius - size // 8],
        fill='#047857'
    )
    
    # Círculo izquierdo
    draw.ellipse(
        [center_x - foliage_radius - size // 10, center_y - foliage_radius // 2 - size // 8,
         center_x + foliage_radius // 2, center_y + foliage_radius - size // 8],
        fill='#047857'
    )
    
    # Círculo derecho
    draw.ellipse(
        [center_x - foliage_radius // 2, center_y - foliage_radius // 2 - size // 8,
         center_x + foliage_radius + size // 10, center_y + foliage_radius - size // 8],
        fill='#047857'
    )
    
    # Agregar borde blanco para mejor visibilidad
    border_width = size // 40
    draw.rectangle(
        [0, 0, size - 1, size - 1],
        outline='white',
        width=border_width
    )
    
    return img

def generate_icons(output_dir):
    """Genera todos los iconos necesarios para la PWA"""
    os.makedirs(output_dir, exist_ok=True)
    
    # Crear icono base en el tamaño más grande
    base_icon = create_base_icon(512)
    
    # Generar todos los tamaños
    for size in ICON_SIZES:
        # Redimensionar
        icon = base_icon.resize((size, size), Image.Resampling.LANCZOS)
        
        # Guardar
        output_path = os.path.join(output_dir, f'icon-{size}x{size}.png')
        icon.save(output_path, 'PNG', optimize=True)
        print(f'✓ Generado: icon-{size}x{size}.png')
    
    print(f'\n✓ Todos los iconos generados en: {output_dir}')

if __name__ == '__main__':
    script_dir = os.path.dirname(os.path.abspath(__file__))
    icons_dir = os.path.join(script_dir, 'public', 'icons')
    
    print('Generando iconos de PWA...\n')
    generate_icons(icons_dir)
    print('\n¡Listo!')
