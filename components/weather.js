// components/WeatherApp.js
import { Search, Wind, Droplets, Cloud, Thermometer } from 'lucide-react';

const WeatherApp = () => {
    return (
        <div className="min-h-screen bg-[#312C5B] flex items-center justify-center p-4">
            <div className="w-full max-w-md mx-auto">
                {/* Search Input */}
                <div className="relative mb-8">
                    <input
                        type="text"
                        placeholder="Insert your city name"
                        className="w-full bg-transparent border-b-2 border-gray-400 text-white placeholder-gray-400 py-3 px-0 text-lg focus:outline-none focus:border-white transition-colors"
                    />
                    <Search className="absolute right-0 top-3 h-6 w-6 text-gray-400" />
                </div>

                {/* Date and Location */}
                <div className="text-center mb-8">
                    <h1 className="text-white text-sm font-light mb-1">Monday</h1>
                    <h2 className="text-white text-sm font-light mb-6">04 September</h2>
                    <h3 className="text-white text-4xl font-light tracking-wide">Jakarta</h3>
                </div>

                {/* Divider */}
                <hr className="border-gray-500 mb-8" />

                {/* Main Temperature Display */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-6 mb-4">
                        <span className="text-white text-8xl font-thin">17°</span>
                        <Cloud className="h-20 w-20 text-white" />
                    </div>
                    <p className="text-white text-xl font-light">Rainy</p>
                </div>

                {/* Divider */}
                <hr className="border-gray-500 mb-8" />

                {/* Weather Details */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="text-center">
                        <Wind className="h-6 w-6 text-white mx-auto mb-2" />
                        <p className="text-white text-sm font-light mb-1">6.69/ms</p>
                        <p className="text-gray-400 text-xs">Wind</p>
                    </div>
                    <div className="text-center">
                        <Droplets className="h-6 w-6 text-white mx-auto mb-2" />
                        <p className="text-white text-sm font-light mb-1">70%</p>
                        <p className="text-gray-400 text-xs">Humidity</p>
                    </div>
                    <div className="text-center">
                        <Cloud className="h-6 w-6 text-white mx-auto mb-2" />
                        <p className="text-white text-sm font-light mb-1">40%</p>
                        <p className="text-gray-400 text-xs">Clouds</p>
                    </div>
                    <div className="text-center">
                        <Thermometer className="h-6 w-6 text-white mx-auto mb-2" />
                        <p className="text-white text-sm font-light mb-1">40%</p>
                        <p className="text-gray-400 text-xs">Real Feel</p>
                    </div>
                </div>

                {/* Weekly Forecast */}
                <div className="mb-4">
                    <h4 className="text-white text-lg font-light mb-6">Weekly Forecast</h4>
                    <div className="grid grid-cols-5 gap-2">
                        {/* Tuesday */}
                        <div className="text-center">
                            <p className="text-gray-400 text-xs mb-2">Tuesday</p>
                            <Cloud className="h-5 w-5 text-white mx-auto mb-2" />
                            <p className="text-white text-sm font-light mb-1">26°</p>
                            <p className="text-gray-400 text-xs">Cloudy</p>
                        </div>

                        {/* Wednesday */}
                        <div className="text-center">
                            <p className="text-gray-400 text-xs mb-2">Wednesday</p>
                            <Cloud className="h-5 w-5 text-white mx-auto mb-2" />
                            <p className="text-white text-sm font-light mb-1">14°</p>
                            <p className="text-gray-400 text-xs">Rainy</p>
                        </div>

                        {/* Thursday */}
                        <div className="text-center">
                            <p className="text-gray-400 text-xs mb-2">Thursday</p>
                            <Cloud className="h-5 w-5 text-white mx-auto mb-2" />
                            <p className="text-white text-sm font-light mb-1">25°</p>
                            <p className="text-gray-400 text-xs">Cloudy</p>
                        </div>

                        {/* Friday */}
                        <div className="text-center">
                            <p className="text-gray-400 text-xs mb-2">Friday</p>
                            <div className="h-5 w-5 bg-yellow-400 rounded-full mx-auto mb-2"></div>
                            <p className="text-white text-sm font-light mb-1">32°</p>
                            <p className="text-gray-400 text-xs">Clear</p>
                        </div>

                        {/* Saturday */}
                        <div className="text-center">
                            <p className="text-gray-400 text-xs mb-2">Saturday</p>
                            <Cloud className="h-5 w-5 text-white mx-auto mb-2" />
                            <p className="text-white text-sm font-light mb-1">22°</p>
                            <p className="text-gray-400 text-xs">Cloudy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;