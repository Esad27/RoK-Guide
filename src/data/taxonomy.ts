import type { Locale } from './types';

const labels: Record<string, { vi: string; es: string }> = {
  Infantry: { vi: 'Bộ binh', es: 'Infantería' }, Cavalry: { vi: 'Kỵ binh', es: 'Caballería' }, Archer: { vi: 'Cung thủ', es: 'Arqueros' },
  Leadership: { vi: 'Lãnh đạo', es: 'Liderazgo' }, Peacekeeping: { vi: 'Gìn giữ hòa bình', es: 'Pacificación' }, Support: { vi: 'Hỗ trợ', es: 'Apoyo' },
  Conquering: { vi: 'Chinh phục', es: 'Conquista' }, Skill: { vi: 'Kỹ năng', es: 'Habilidad' }, Versatility: { vi: 'Đa dụng', es: 'Versatilidad' },
  Attack: { vi: 'Tấn công', es: 'Ataque' },
  Legendary: { vi: 'Huyền thoại', es: 'Legendario' }, Epic: { vi: 'Sử thi', es: 'Épico' },
  Britain: { vi: 'Anh', es: 'Britania' }, China: { vi: 'Trung Quốc', es: 'China' }, France: { vi: 'Pháp', es: 'Francia' },
  Germany: { vi: 'Đức', es: 'Alemania' }, Greece: { vi: 'Hy Lạp', es: 'Grecia' }, Japan: { vi: 'Nhật Bản', es: 'Japón' },
  Korea: { vi: 'Hàn Quốc', es: 'Corea' }, Spain: { vi: 'Tây Ban Nha', es: 'España' }, Arabia: { vi: 'Ả Rập', es: 'Arabia' },
  Vikings: { vi: 'Viking', es: 'Vikingos' }, Egypt: { vi: 'Ai Cập', es: 'Egipto' }, 'Ottoman Empire': { vi: 'Đế quốc Ottoman', es: 'Imperio otomano' },
  'Open field': { vi: 'Open field', es: 'Campo abierto' }, 'Open field support': { vi: 'Hỗ trợ open field', es: 'Apoyo de campo abierto' },
  'Early open field': { vi: 'Open field đầu game', es: 'Campo abierto inicial' }, 'Early infantry': { vi: 'Bộ binh đầu game', es: 'Infantería inicial' },
  'Early-game infantry': { vi: 'Bộ binh đầu game', es: 'Infantería inicial' }, 'Infantry frontline': { vi: 'Tuyến đầu bộ binh', es: 'Primera línea de infantería' },
  'Defensive infantry': { vi: 'Bộ binh phòng thủ', es: 'Infantería defensiva' }, 'Early cavalry': { vi: 'Kỵ binh đầu game', es: 'Caballería inicial' },
  'Early-game cavalry': { vi: 'Kỵ binh đầu game', es: 'Caballería inicial' }, 'Early cavalry rallies': { vi: 'Rally kỵ binh đầu game', es: 'Rallies iniciales de caballería' },
  'Early archer march': { vi: 'Đạo cung đầu game', es: 'Marcha inicial de arqueros' }, 'Archer march': { vi: 'Đạo cung', es: 'Marcha de arqueros' },
  'Early garrison': { vi: 'Đồn trú đầu game', es: 'Guarnición inicial' }, 'City rallies': { vi: 'Rally thành', es: 'Rallies contra ciudades' },
  'Barbarians': { vi: 'Man rợ', es: 'Bárbaros' }, 'Barbarian forts': { vi: 'Pháo đài man rợ', es: 'Fuertes bárbaros' },
  'Barbarian chaining': { vi: 'Kéo chuỗi man rợ', es: 'Encadenar bárbaros' }, 'AoE barbarian chaining': { vi: 'Kéo chuỗi man rợ bằng AoE', es: 'Encadenar bárbaros con área' },
  'Fast marches': { vi: 'Đạo hành quân nhanh', es: 'Marchas rápidas' }, 'Large fights': { vi: 'Giao tranh lớn', es: 'Combates masivos' },
  'Mixed troops': { vi: 'Quân hỗn hợp', es: 'Tropas mixtas' }, 'Primary commander': { vi: 'Chủ tướng', es: 'Comandante primario' },
  'Secondary commander': { vi: 'Tướng phụ', es: 'Comandante secundario' }, 'Single-target control': { vi: 'Khống chế đơn mục tiêu', es: 'Control a un objetivo' },
  'Skill-damage secondary': { vi: 'Tướng phụ sát thương kỹ năng', es: 'Secundario de daño de habilidad' },
  'Early skill-damage secondary': { vi: 'Tướng phụ sát thương kỹ năng đầu game', es: 'Secundario inicial de daño de habilidad' },
  'Anti-heal support': { vi: 'Hỗ trợ giảm hồi máu', es: 'Apoyo anti-curación' },
  'AoE': { vi: 'Sát thương diện rộng', es: 'Daño de área' }, 'City rally': { vi: 'Rally thành', es: 'Rally contra ciudades' },
  'Cleanse': { vi: 'Giải hiệu ứng', es: 'Limpieza' }, 'Counterattack': { vi: 'Phản công', es: 'Contraataque' }, Debuff: { vi: 'Giảm chỉ số', es: 'Perjuicio' },
  Defense: { vi: 'Phòng thủ', es: 'Defensa' }, 'Defense reduction': { vi: 'Giảm phòng thủ', es: 'Reducción de defensa' },
  'Early game': { vi: 'Đầu game', es: 'Juego inicial' }, Garrison: { vi: 'Đồn trú', es: 'Guarnición' }, 'Gold key': { vi: 'Chìa khóa vàng', es: 'Llave dorada' },
  Healing: { vi: 'Hồi phục', es: 'Curación' }, 'Healing reduction': { vi: 'Giảm hồi máu', es: 'Reducción de curación' },
  Mobility: { vi: 'Cơ động', es: 'Movilidad' }, 'Paid acquisition': { vi: 'Nhận qua nạp', es: 'Obtención de pago' }, PvE: { vi: 'PvE', es: 'PvE' },
  Rage: { vi: 'Nộ', es: 'Furia' }, 'Rage reduction': { vi: 'Giảm nộ', es: 'Reducción de furia' }, Shield: { vi: 'Khiên', es: 'Escudo' },
  Silence: { vi: 'Câm lặng', es: 'Silencio' }, 'Single target': { vi: 'Đơn mục tiêu', es: 'Un objetivo' },
  'Skill damage': { vi: 'Sát thương kỹ năng', es: 'Daño de habilidad' }, 'Skill vulnerability': { vi: 'Tăng sát thương kỹ năng nhận vào', es: 'Vulnerabilidad a habilidades' },
  Slow: { vi: 'Làm chậm', es: 'Ralentización' }, Sustain: { vi: 'Duy trì', es: 'Aguante' }, 'Wheel of Fortune': { vi: 'Vòng quay may mắn', es: 'Rueda de la Fortuna' }
};

export function taxonomyLabel(value: string, locale: Locale): string {
  return locale === 'en' ? value : labels[value]?.[locale] ?? value;
}
