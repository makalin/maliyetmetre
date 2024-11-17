import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const UtilityCalculator = () => {
  // State for electricity
  const [electricity, setElectricity] = useState({
    power: '',
    quantity: 1,
    hoursPerDay: 10,
    daysPerMonth: 30,
    rate: 0.7102
  });

  // State for natural gas
  const [naturalGas, setNaturalGas] = useState({
    consumption: '',
    hoursPerDay: 10,
    daysPerMonth: 30,
    rate: 0.4523
  });

  // State for water
  const [water, setWater] = useState({
    consumption: '',
    hoursPerDay: 10,
    daysPerMonth: 30,
    rate: 0.3245
  });

  // Pie chart data for all utilities
  const electricityBreakdown = [
    { name: 'Birim Enerji Tüketim Bedeli', value: 0.2309 },
    { name: 'Dağıtım Bedeli', value: 0.1304 },
    { name: 'KDV', value: 0.0683 },
    { name: 'Elektrik Tüketim Vergisi', value: 0.0115 },
    { name: 'TRT Payı', value: 0.0046 },
    { name: 'Enerji Fonu', value: 0.0023 }
  ];

  const naturalGasBreakdown = [
    { name: 'Birim Gaz Bedeli', value: 0.2850 },
    { name: 'Dağıtım Bedeli', value: 0.0892 },
    { name: 'KDV', value: 0.0671 },
    { name: 'ÖTV', value: 0.0110 }
  ];

  const waterBreakdown = [
    { name: 'Su Bedeli', value: 0.1845 },
    { name: 'Atık Su Bedeli', value: 0.0923 },
    { name: 'KDV', value: 0.0374 },
    { name: 'Çevre Temizlik Vergisi', value: 0.0103 }
  ];

  const COLORS = {
    electricity: ['#FCB91D', '#045FB4', '#0080FF', '#00BFFF', '#ADD6FC', '#178E17'],
    naturalGas: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
    water: ['#4A90E2', '#50E3C2', '#F5A623', '#7ED321']
  };

  // Calculations for electricity
  const calculateElectricity = () => {
    const dailyKwh = (electricity.power / 1000) * electricity.quantity * electricity.hoursPerDay;
    const monthlyKwh = dailyKwh * electricity.daysPerMonth;
    const yearlyKwh = monthlyKwh * 12;

    const dailyCost = dailyKwh * electricity.rate;
    const monthlyCost = dailyCost * electricity.daysPerMonth;
    const yearlyCost = monthlyCost * 12;

    return { dailyKwh, monthlyKwh, yearlyKwh, dailyCost, monthlyCost, yearlyCost };
  };

  // Calculations for natural gas
  const calculateNaturalGas = () => {
    const dailyM3 = naturalGas.consumption * naturalGas.hoursPerDay;
    const monthlyM3 = dailyM3 * naturalGas.daysPerMonth;
    const yearlyM3 = monthlyM3 * 12;

    const dailyCost = dailyM3 * naturalGas.rate;
    const monthlyCost = dailyCost * naturalGas.daysPerMonth;
    const yearlyCost = monthlyCost * 12;

    return { dailyM3, monthlyM3, yearlyM3, dailyCost, monthlyCost, yearlyCost };
  };

  // Calculations for water
  const calculateWater = () => {
    const dailyM3 = water.consumption * water.hoursPerDay;
    const monthlyM3 = dailyM3 * water.daysPerMonth;
    const yearlyM3 = monthlyM3 * 12;

    const dailyCost = dailyM3 * water.rate;
    const monthlyCost = dailyCost * water.daysPerMonth;
    const yearlyCost = monthlyCost * 12;

    return { dailyM3, monthlyM3, yearlyM3, dailyCost, monthlyCost, yearlyCost };
  };

  const PieChartComponent = ({ data, colors, title }) => (
    <div className="h-64">
      <h3 className="text-sm font-medium text-center mb-2">{title}</h3>
      <PieChart width={400} height={250}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Tabs defaultValue="electricity" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="electricity">Elektrik</TabsTrigger>
          <TabsTrigger value="naturalgas">Doğalgaz</TabsTrigger>
          <TabsTrigger value="water">Su</TabsTrigger>
        </TabsList>

        {/* Electricity Tab */}
        <TabsContent value="electricity">
          <Card>
            <CardHeader>
              <CardTitle>Elektrik Tüketimi Hesaplama Aracı</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Güç Tüketimi (W)</label>
                    <input
                      type="number"
                      className="mt-1 p-2 border rounded"
                      value={electricity.power}
                      onChange={(e) => setElectricity({...electricity, power: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Adet</label>
                    <input
                      type="number"
                      className="mt-1 p-2 border rounded"
                      value={electricity.quantity}
                      onChange={(e) => setElectricity({...electricity, quantity: e.target.value})}
                    />
                  </div>
                </div>
                <PieChartComponent
                  data={electricityBreakdown}
                  colors={COLORS.electricity}
                  title="1 kWh Elektriğin Fiyat Bileşenleri (TL/kWh)"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Natural Gas Tab */}
        <TabsContent value="naturalgas">
          <Card>
            <CardHeader>
              <CardTitle>Doğalgaz Tüketimi Hesaplama Aracı</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Saatlik Tüketim (m³)</label>
                    <input
                      type="number"
                      className="mt-1 p-2 border rounded"
                      value={naturalGas.consumption}
                      onChange={(e) => setNaturalGas({...naturalGas, consumption: e.target.value})}
                    />
                  </div>
                </div>
                <PieChartComponent
                  data={naturalGasBreakdown}
                  colors={COLORS.naturalGas}
                  title="1 m³ Doğalgazın Fiyat Bileşenleri (TL/m³)"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Water Tab */}
        <TabsContent value="water">
          <Card>
            <CardHeader>
              <CardTitle>Su Tüketimi Hesaplama Aracı</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Saatlik Tüketim (m³)</label>
                    <input
                      type="number"
                      className="mt-1 p-2 border rounded"
                      value={water.consumption}
                      onChange={(e) => setWater({...water, consumption: e.target.value})}
                    />
                  </div>
                </div>
                <PieChartComponent
                  data={waterBreakdown}
                  colors={COLORS.water}
                  title="1 m³ Suyun Fiyat Bileşenleri (TL/m³)"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UtilityCalculator;
