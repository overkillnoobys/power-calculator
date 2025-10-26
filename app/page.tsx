"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Device {
  id: number;
  category: string;
  name: string;
  watts: number;
  time: {
    value: number;
    unit: "hours" | "minutes";
  };
}

interface StationOption {
  id: string;
  name: string;
  capacity: string;
  minWh: number;
  maxWh: number;
  description: string;
  highlight: string;
}

const initialDevices: Device[] = [
  { id: 1, category: "Електроніка", name: "Лампа", watts: 10, time: { value: 1, unit: "hours" } },
  { id: 2, category: "Електроніка", name: "Роутер", watts: 10, time: { value: 1, unit: "hours" } },
  { id: 3, category: "Електроніка", name: "Смартфон", watts: 15, time: { value: 1, unit: "hours" } },
  { id: 4, category: "Електроніка", name: "Дрон", watts: 60, time: { value: 1, unit: "hours" } },
  { id: 5, category: "Електроніка", name: "StarLink", watts: 50, time: { value: 3, unit: "hours" } },
  { id: 6, category: "Електроніка", name: "Вентилятор", watts: 40, time: { value: 2, unit: "hours" } },
  { id: 7, category: "Електроніка", name: "Телевізор", watts: 70, time: { value: 2, unit: "hours" } },
  { id: 8, category: "Електроніка", name: "Монітор", watts: 50, time: { value: 2, unit: "hours" } },
  { id: 9, category: "Електроніка", name: "Проектор", watts: 100, time: { value: 2, unit: "hours" } },
  { id: 10, category: "Електроніка", name: "Ноутбук", watts: 60, time: { value: 2, unit: "hours" } },
  { id: 11, category: "Електроніка", name: "Комп’ютер", watts: 150, time: { value: 2, unit: "hours" } },
  { id: 12, category: "Електроніка", name: "Ігрові приставки", watts: 120, time: { value: 1, unit: "hours" } },
  { id: 13, category: "Електроніка", name: "Принтер/Сканер", watts: 40, time: { value: 0.5, unit: "hours" } },
  { id: 20, category: "Велика побутова техніка", name: "Холодильник", watts: 100, time: { value: 10, unit: "hours" } },
  { id: 21, category: "Велика побутова техніка", name: "Пральна машина", watts: 500, time: { value: 1, unit: "hours" } },
  { id: 22, category: "Велика побутова техніка", name: "Конвекторні обігрівачі", watts: 1200, time: { value: 1, unit: "hours" } },
  { id: 23, category: "Велика побутова техніка", name: "Водонагрівачі", watts: 1500, time: { value: 1, unit: "hours" } },
  { id: 24, category: "Велика побутова техніка", name: "Обігрівачі", watts: 1500, time: { value: 1, unit: "hours" } },
  { id: 25, category: "Велика побутова техніка", name: "Тепловентилятори", watts: 1200, time: { value: 1, unit: "hours" } },
  { id: 26, category: "Велика побутова техніка", name: "Плити", watts: 1000, time: { value: 1, unit: "hours" } },
  { id: 27, category: "Велика побутова техніка", name: "Духовка", watts: 1800, time: { value: 1, unit: "hours" } },
  { id: 28, category: "Велика побутова техніка", name: "Кондиціонер", watts: 900, time: { value: 3, unit: "hours" } },
  { id: 29, category: "Велика побутова техніка", name: "Сушильна машина", watts: 800, time: { value: 1, unit: "hours" } },
  { id: 30, category: "Дрібна побутова техніка", name: "Блендер", watts: 300, time: { value: 0.1, unit: "hours" } },
  { id: 31, category: "Дрібна побутова техніка", name: "Мультиварка", watts: 700, time: { value: 1, unit: "hours" } },
  { id: 32, category: "Дрібна побутова техніка", name: "Кавоварка", watts: 900, time: { value: 0.2, unit: "hours" } },
  { id: 33, category: "Дрібна побутова техніка", name: "Гриль", watts: 1000, time: { value: 0.5, unit: "hours" } },
  { id: 34, category: "Дрібна побутова техніка", name: "Фен", watts: 1000, time: { value: 0.5, unit: "hours" } },
  { id: 35, category: "Дрібна побутова техніка", name: "Мікрохвильовка", watts: 1200, time: { value: 0.5, unit: "hours" } },
  { id: 36, category: "Дрібна побутова техніка", name: "Електрочайник", watts: 1500, time: { value: 0.2, unit: "hours" } },
  { id: 40, category: "Інструменти", name: "Акумуляторна лобзики", watts: 400, time: { value: 1, unit: "hours" } },
  { id: 41, category: "Інструменти", name: "Дриль", watts: 800, time: { value: 1, unit: "hours" } },
  { id: 42, category: "Інструменти", name: "Акумуляторні шуруповерти", watts: 500, time: { value: 1, unit: "hours" } },
  { id: 43, category: "Інструменти", name: "Акумуляторні тримери або коси", watts: 1000, time: { value: 1, unit: "hours" } },
  { id: 44, category: "Інструменти", name: "Лобзики", watts: 600, time: { value: 1, unit: "hours" } },
  { id: 45, category: "Інструменти", name: "Бетономішувачі", watts: 1200, time: { value: 2, unit: "hours" } },
  { id: 46, category: "Інструменти", name: "Зварювальний апарат", watts: 1500, time: { value: 1, unit: "hours" } },
  { id: 47, category: "Інструменти", name: "Компресор", watts: 1200, time: { value: 1, unit: "hours" } },
];

const stationOptions: StationOption[] = [
  {
    id: "eb3a",
    name: "Bluetti EB3A",
    capacity: "268 Wh / 600 W",
    minWh: 0,
    maxWh: 600,
    description: "Ідеальна для освітлення, роутера, зарядки смартфонів та невеликої електроніки.",
    highlight: "Компактна та легка",
  },
  {
    id: "eb55",
    name: "Bluetti EB55",
    capacity: "537 Wh / 700 W",
    minWh: 300,
    maxWh: 900,
    description: "Підтримує ноутбуки, монітори, невеликі електроприлади та Starlink.",
    highlight: "Портативна універсальність",
  },
  {
    id: "ac60",
    name: "Bluetti AC60",
    capacity: "403 Wh (розширюється до 2048 Wh)",
    minWh: 500,
    maxWh: 1500,
    description: "Захист IP65, швидке заряджання та підтримка побутової техніки середньої потужності.",
    highlight: "Модульна ємність",
  },
  {
    id: "ac180",
    name: "Bluetti AC180",
    capacity: "1152 Wh / 1800 W",
    minWh: 900,
    maxWh: 2200,
    description: "Підходить для холодильників, інструментів та кондиціонерів у короткостроковому режимі.",
    highlight: "Стабільна потужність",
  },
  {
    id: "ac200p",
    name: "Bluetti AC200P",
    capacity: "2000 Wh / 2000 W",
    minWh: 1500,
    maxWh: 3200,
    description: "Справляється з більшістю побутових приладів і може бути центром автономної системи.",
    highlight: "Домашня автономність",
  },
  {
    id: "ac300",
    name: "Bluetti AC300 + B300",
    capacity: "3072–12288 Wh / 3000 W",
    minWh: 2500,
    maxWh: Infinity,
    description: "Повноцінне резервне живлення для будинку та енергозалежного обладнання.",
    highlight: "Система резерву",
  },
];

const categories = [
  "Електроніка",
  "Велика побутова техніка",
  "Дрібна побутова техніка",
  "Інструменти",
];

const MotionButton = motion(Button);
const MotionCard = motion(Card);

export default function PowerCalculator() {
  const [devices, setDevices] = useState(initialDevices);
  const [selected, setSelected] = useState<number[]>([]);
  const inverterEfficiency = 0.9;
  const depthOfDischarge = 0.85;

  const toggleDevice = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((deviceId) => deviceId !== id) : [...prev, id]
    );
  };

  const updateDevice = (
    id: number,
    field: keyof Device | "time",
    value: number | Partial<Device["time"]>
  ) => {
    setDevices((prev) =>
      prev.map((device) => {
        if (device.id !== id) {
          return device;
        }

        if (field === "time" && typeof value === "object") {
          return { ...device, time: { ...device.time, ...value } };
        }

        if (field === "watts" && typeof value === "number") {
          return { ...device, watts: value };
        }

        return device;
      })
    );
  };

  const handleIncrement = (id: number, field: "watts" | "time", step: number) => {
    setDevices((prev) =>
      prev.map((device) => {
        if (device.id !== id) {
          return device;
        }

        if (field === "watts") {
          return { ...device, watts: Math.max(0, device.watts + step) };
        }

        return {
          ...device,
          time: { ...device.time, value: Math.max(0, Number(device.time.value + step)) },
        };
      })
    );
  };

  const total = useMemo(() => {
    const chosenDevices = devices.filter((device) => selected.includes(device.id));

    const totalWh = chosenDevices.reduce((sum, device) => {
      const timeInHours =
        device.time.unit === "hours" ? device.time.value : device.time.value / 60;
      return sum + device.watts * timeInHours;
    }, 0);

    return Math.round(totalWh / inverterEfficiency / depthOfDischarge);
  }, [devices, selected, inverterEfficiency, depthOfDischarge]);

  const matchingStations = useMemo(() => {
    if (selected.length === 0) {
      return stationOptions.slice(0, 3);
    }

    const matches = stationOptions.filter(
      (station) => total >= station.minWh && total <= station.maxWh
    );

    if (matches.length > 0) {
      return matches;
    }

    const fallback = stationOptions.find((station) => station.maxWh === Infinity);

    return fallback ? [fallback] : stationOptions.slice(-1);
  }, [selected.length, total]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0a1f] via-[#1b1034] to-[#14062b] text-gray-100 p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <header className="mb-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8b5cf6]/40 bg-[#2d1747]/40 text-xs uppercase tracking-[0.3em] text-[#c4b5fd] shadow-[0_0_20px_rgba(139,92,246,0.25)]"
          >
            Bluetti Power Planner
          </motion.div>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold text-white leading-tight">
            Калькулятор потужності <span className="text-[#c4b5fd]">портативної станції</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl">
            Оберіть техніку, яку ви плануєте підключати. Ми миттєво розрахуємо потребу в енергії,
            врахуємо ефективність інвертора та глибину розряду і запропонуємо оптимальні Bluetti
            станції.
          </p>
        </header>

        {categories.map((category) => (
          <section key={category} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent" />
              <h2 className="text-2xl font-semibold text-white drop-shadow-md">{category}</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent" />
            </div>
            <div className="flex flex-wrap gap-3">
              {devices
                .filter((device) => device.category === category)
                .map((device) => {
                  const isSelected = selected.includes(device.id);
                  return (
                    <motion.button
                      key={device.id}
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => toggleDevice(device.id)}
                      className={`group px-4 py-2 rounded-xl border text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c4b5fd]/70 focus-visible:ring-offset-[#130821] shadow-sm ${
                        isSelected
                          ? "bg-gradient-to-r from-[#7c3aed] to-[#a855f7] border-transparent text-white shadow-[0_12px_30px_rgba(124,58,237,0.35)]"
                          : "bg-[#201033]/70 border-[#8b5cf6]/20 text-gray-300 hover:border-[#c4b5fd]/50 hover:text-white"
                      }`}
                    >
                      <span className="block font-medium">{device.name}</span>
                      <span
                        className={`block text-xs transition-colors duration-200 ${
                          isSelected ? "text-white/70" : "text-gray-400"
                        }`}
                      >
                        {device.watts} Вт · {device.time.value}
                        {device.time.unit === "hours" ? "год" : "хв"}
                      </span>
                    </motion.button>
                  );
                })}
            </div>
          </section>
        ))}

        {selected.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 bg-[#1a0d2b]/70 border border-[#8b5cf6]/40 backdrop-blur rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(88,28,135,0.25)]"
          >
            <div className="px-6 py-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">Вибрані пристрої</h3>
                <p className="text-sm text-gray-400">
                  Налаштуйте тривалість роботи та потужність для точного розрахунку.
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2f1b4a]/80 border border-[#8b5cf6]/40 text-[#c4b5fd]">
                  Обрано {selected.length} {selected.length === 1 ? "пристрій" : "пристрої"}
                </span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-200 border-t border-[#8b5cf6]/30">
                <thead>
                  <tr className="bg-[#251138]/90 text-left text-xs uppercase tracking-wide text-gray-300">
                    <th className="p-3 font-medium">Пристрій</th>
                    <th className="p-3 font-medium">Потужність (Вт)</th>
                    <th className="p-3 font-medium">Час живлення</th>
                    <th className="p-3 font-medium">Одиниця</th>
                    <th className="p-3 font-medium">Споживання</th>
                    <th className="p-3 font-medium text-right">Видалити</th>
                  </tr>
                </thead>
                <tbody>
                  {devices
                    .filter((device) => selected.includes(device.id))
                    .map((device) => {
                      const timeInHours =
                        device.time.unit === "hours"
                          ? device.time.value
                          : device.time.value / 60;
                      const energy = Math.round(device.watts * timeInHours);

                      return (
                        <tr
                          key={device.id}
                          className="odd:bg-[#160a25]/70 even:bg-[#1d0d2f]/70 transition-colors hover:bg-[#2b1744]/70"
                        >
                          <td className="p-3 text-white font-medium">{device.name}</td>
                          <td className="p-3">
                            {device.name === "Комп’ютер" ? (
                              <Select
                                onValueChange={(value) => {
                                  let watts = 150;
                                  if (value === "office") watts = 100;
                                  if (value === "gaming") watts = 300;
                                  if (value === "workstation") watts = 500;
                                  updateDevice(device.id, "watts", watts);
                                }}
                              >
                                <SelectTrigger className="bg-[#160a25] border border-[#8b5cf6]/40 text-white w-48 focus:ring-2 focus:ring-[#c4b5fd]/50">
                                  <SelectValue placeholder="Тип комп’ютера" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#140821] text-white border border-[#8b5cf6]/40">
                                  <SelectItem value="office">Офісний ПК (100 Вт)</SelectItem>
                                  <SelectItem value="gaming">Ігровий ПК (300 Вт)</SelectItem>
                                  <SelectItem value="workstation">Робоча станція (500 Вт)</SelectItem>
                                </SelectContent>
                              </Select>
                            ) : device.name === "Монітор" ? (
                              <Select
                                onValueChange={(value) => {
                                  let watts = 50;
                                  if (value === "small") watts = 40;
                                  if (value === "large") watts = 70;
                                  if (value === "pro") watts = 100;
                                  updateDevice(device.id, "watts", watts);
                                }}
                              >
                                <SelectTrigger className="bg-[#160a25] border border-[#8b5cf6]/40 text-white w-48 focus:ring-2 focus:ring-[#c4b5fd]/50">
                                  <SelectValue placeholder="Тип монітора" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#140821] text-white border border-[#8b5cf6]/40">
                                  <SelectItem value="small">Монітор до 27″ (40 Вт)</SelectItem>
                                  <SelectItem value="large">Монітор від 27″ (70 Вт)</SelectItem>
                                  <SelectItem value="pro">Ігровий або професійний (100 Вт)</SelectItem>
                                </SelectContent>
                              </Select>
                            ) : (
                              <div className="flex items-center justify-center gap-1">
                                <MotionButton
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleIncrement(device.id, "watts", -10)}
                                  className="h-8 w-8 bg-transparent text-[#c4b5fd] hover:bg-[#2f1b4a] hover:text-white active:scale-90"
                                >
                                  –
                                </MotionButton>
                                <Input
                                  type="number"
                                  step={10}
                                  value={device.watts}
                                  onChange={(event) =>
                                    updateDevice(device.id, "watts", Number(event.target.value))
                                  }
                                  className="text-center w-20 border border-[#8b5cf6]/40 bg-[#140821] text-white focus-visible:ring-1 focus-visible:ring-[#c4b5fd]"
                                />
                                <MotionButton
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleIncrement(device.id, "watts", 10)}
                                  className="h-8 w-8 bg-transparent text-[#c4b5fd] hover:bg-[#2f1b4a] hover:text-white active:scale-90"
                                >
                                  +
                                </MotionButton>
                              </div>
                            )}
                          </td>
                          <td className="p-3">
                            <div className="flex items-center justify-center gap-1">
                              <MotionButton
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                  handleIncrement(
                                    device.id,
                                    "time",
                                    device.time.unit === "hours" ? -1 : -5
                                  )
                                }
                                className="h-8 w-8 bg-transparent text-[#c4b5fd] hover:bg-[#2f1b4a] hover:text-white active:scale-90"
                              >
                                –
                              </MotionButton>
                              <Input
                                type="number"
                                step={device.time.unit === "hours" ? 1 : 5}
                                value={device.time.value}
                                onChange={(event) =>
                                  updateDevice(device.id, "time", {
                                    value: Number(event.target.value),
                                  })
                                }
                                className="text-center w-20 border border-[#8b5cf6]/40 bg-[#140821] text-white focus-visible:ring-1 focus-visible:ring-[#c4b5fd]"
                              />
                              <MotionButton
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                  handleIncrement(
                                    device.id,
                                    "time",
                                    device.time.unit === "hours" ? 1 : 5
                                  )
                                }
                                className="h-8 w-8 bg-transparent text-[#c4b5fd] hover:bg-[#2f1b4a] hover:text-white active:scale-90"
                              >
                                +
                              </MotionButton>
                            </div>
                          </td>
                          <td className="p-3">
                            <Select
                              value={device.time.unit}
                              onValueChange={(value) =>
                                updateDevice(device.id, "time", {
                                  unit: value as Device["time"]["unit"],
                                })
                              }
                            >
                              <SelectTrigger className="bg-[#160a25] border border-[#8b5cf6]/40 text-white w-24 focus:ring-2 focus:ring-[#c4b5fd]/50">
                                <SelectValue placeholder="год" />
                              </SelectTrigger>
                              <SelectContent className="bg-[#140821] text-white border border-[#8b5cf6]/40">
                                <SelectItem value="hours">год</SelectItem>
                                <SelectItem value="minutes">хв</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                          <td className="p-3 text-[#c4b5fd] font-semibold">{energy} Wh</td>
                          <td className="p-3 text-right">
                            <MotionButton
                              whileTap={{ scale: 0.85 }}
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleDevice(device.id)}
                              className="rounded-full w-8 h-8 text-red-400 hover:text-red-200 hover:bg-red-500/10"
                            >
                              ✕
                            </MotionButton>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <MotionCard
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1a0d2b]/80 border border-[#8b5cf6]/40 shadow-[0_20px_50px_rgba(76,29,149,0.25)]"
          >
            <CardContent className="p-6">
              <h3 className="text-lg text-gray-300 mb-1">Загальне споживання</h3>
              <p className="text-4xl font-bold text-[#c4b5fd] tracking-tight">{total} Wh</p>
              <p className="text-xs text-gray-400 mt-2">
                Враховано ККД інвертора (≈90%) та рекомендований запас ємності (15%).
              </p>
            </CardContent>
          </MotionCard>

          <MotionCard
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1a0d2b]/80 border border-[#8b5cf6]/40 shadow-[0_20px_50px_rgba(76,29,149,0.25)]"
          >
            <CardContent className="p-6">
              <h3 className="text-lg text-gray-300 mb-3">Рекомендовані станції</h3>
              <div className="space-y-4">
                {matchingStations.map((station) => (
                  <div
                    key={station.id}
                    className="group rounded-xl border border-transparent bg-[#26123d]/80 px-4 py-3 transition-all hover:border-[#c4b5fd]/60 hover:bg-[#341a52]/80"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-base font-semibold text-white">{station.name}</p>
                        <p className="text-sm text-[#c4b5fd]">{station.capacity}</p>
                      </div>
                      <span className="text-xs uppercase tracking-wide text-white/70 bg-[#37205b]/80 px-3 py-1 rounded-full border border-[#8b5cf6]/40">
                        {station.highlight}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                      {station.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </MotionCard>

          <MotionCard
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#6d28d9]/80 via-[#7c3aed]/80 to-[#a855f7]/80 border border-[#c4b5fd]/60 text-white shadow-[0_25px_60px_rgba(124,58,237,0.45)]"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Готові зробити вибір?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col gap-3">
              <MotionButton
                whileTap={{ scale: 0.94 }}
                className="bg-white text-[#6d28d9] hover:bg-[#f5f3ff] font-semibold py-2 rounded-lg shadow-lg shadow-purple-900/40"
              >
                Підібрати станцію
              </MotionButton>
              <MotionButton
                whileTap={{ scale: 0.94 }}
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10 font-semibold py-2 rounded-lg"
              >
                Консультація з експертом
              </MotionButton>
              <p className="text-xs text-white/80 leading-relaxed">
                Наш спеціаліст допоможе врахувати підключення сонячних панелей, особливості
                запуску техніки та підкаже найкращі сценарії використання.
              </p>
            </CardContent>
          </MotionCard>
        </div>

        <p className="text-xs text-gray-500 mt-8 text-center">
          *Результати орієнтовні. Розрахунок базується на типовому споживанні пристроїв. Для
          критичних систем рекомендуємо додатковий запас ємності.
        </p>
      </motion.div>
    </div>
  );
}
