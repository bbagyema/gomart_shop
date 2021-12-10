<template>
         <!--search bar  -->
    <div class='home-feed'>
        <Sidebar/>    
             <div class="flex flex-col w-2/4 pl-0 md:p-4 md:space-y-4">
            <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
                <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                        <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                            <div class="relative flex items-center w-full lg:w-full h-full group">
                                <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                    <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                                <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                    </path>
                                </svg>
                                <input type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Where are you shopping at today."/>
                                    <div class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                        +
                                    </div>
                                </div>
                            </div>
                            <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                <a href="#" class="block relative">
                                    <img :src="require('@/assets/acc.png')" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </a>
                            </div>
                        </div>
                    </div>
            </header>
        </div>
            <div class="overflow-hidden shadow-lg rounded-2xl h-90 w-2/3  m-auto">
                <img :src="require('@/assets/game_logo.png')" alt="">
                <div class="bg-white w-full p-4 relative">
                    <button aria-label="Go to article" type="button" class="absolute rounded-full bg-indigo-500 text-white w-12 h-12 right-8 -top-6">
                        <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-white mx-auto" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                        </svg>
                    </button>
                    <p class="text-gray-800 text-xl font-medium mb-2">
                        Game Supermarket
                    </p>
                    <p class="text-gray-600 text-xs">
                        Improve UI with beautiful templates and components for Tailwind css.
                    </p>
                    <div class="flex flex-wrap justify-starts items-center mt-6">
                        <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                            Lugogo
                        </div>
                        <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                            #tailwind
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden shadow-lg rounded-2xl h-90 w-2/3  m-auto">
                <img :src="require('@/assets/capital.png')" alt="">
                <div class="bg-white w-full p-4 relative">
                    <button aria-label="Go to article" type="button" class="absolute rounded-full bg-indigo-500 text-white w-12 h-12 right-8 -top-6">
                        <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-white mx-auto" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                        </svg>
                    </button>
                    <p class="text-gray-800 text-xl font-medium mb-2">
                        Capital Shoppers Supermarket
                    </p>
                    <p class="text-gray-600 text-xs">
                        Improts for Tailwind css.
                    </p>
                    <div class="flex flex-wrap justify-starts items-center mt-6">
                        <button class="hover:text-indigo-800 hover:bg-green-400 text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                            Ntinda
                        </button>
                        <button class="hover:text-indigo-800 hover:bg-green-400 text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                            Bugolobi
                        </button>
                        <button class="hover:text-indigo-800 hover:bg-green-400 text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                            Garden City
                        </button>
                        <p class="text-gray-600 text-xs text-green-400 float-right mb-2">
                        Pick a branch.
                    </p>
                    </div>
                </div>
                
<div class="flex w-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="w-1/3 bg-cover bg-landscape">
    </div>
    <div class="w-2/3 p-4">
        <h1 class="text-gray-900 font-bold text-2xl">
            Milk
        </h1>
        <p class="mt-2 text-gray-600 text-sm">
            You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
        </p>
        <div class="flex item-center mt-2">
            <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
        </div>
        <div class="flex item-center justify-between mt-3">
            <h1 class="text-gray-700 font-bold text-xl">
                shs.1600
            </h1>
            <button  class="px-3 py-2 bg-indigo-600 text-white text-xs rounded">
                Add to Cart
            </button>
        </div>
    </div>
</div>

    </div>
    </div>
</template>
<script>

import Sidebar from './Sidebar.vue'


export default {
    name:"Feed",
    components:{
        Sidebar,
    }
}
</script>