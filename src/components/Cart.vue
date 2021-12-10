<template>
    <div class="cart">
        <h2>{{ title }}</h2>
            <div class="input-group">
                <input v-model="newItem" @keyup.enter="addItem" placeholder="add shopping list item" type="text" class="form-control">
                <span class="input-group-btn">
                    <button @click="addItem" class="btn btn-default" type="button">Add!</button>
                </span>
            </div>
            <ul>
                <li v-for="item in items" :key="{'removed': item.checked}">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" v-model="item.checked"> {{item.text}}
                        </label>
                    </div>
                </li>
            </ul>
            <div class="footer hidden">
                <hr/>
                <em>Change the title of your shopping list here</em>
                <input v-model="title">
            </div>
    </div>

</template>
<script>
export default {
  name: 'Cart',
   data(){
   return{
		items:[{text:'Apples', checked: false},
			{text:'rice', checked: true}],
		title:"My Shopping List",
		newItem:""
        }
     },
  methods: {
		addItem: function(){
			var text;
			text=this.newItem.trim();
			if(text){
                this.items.push({
                    text:text, checked:false
          })
          this.newItem="";
				}
			}
		}	
}
</script>
<style> 
	.container{
		width:40%;
		margin:20px auto 0px auto;
	}
	.removed{
		color:grey;
	}
	.removed label{
		text-decoration:line-through;
}
	ul li {
		list-style-type: none;
	}
</style>