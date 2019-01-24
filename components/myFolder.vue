<template>
<div class="myFolder">
    <Form :model="formItem" :label-width="80">
      <FormItem label="头像 :">
        <div class="uploadBox">
          <div class="changeImg">修改图片</div>
          <Upload action="//jsonplaceholder.typicode.com/posts/">
            <div class="upBox">
              <Icon type="ios-camera" size="45" color="#fff"></Icon>
            </div>
          </Upload>
        </div>
      </FormItem>
      <FormItem label="昵称 :">
        <div class="nickName">昵称</div>
      </FormItem>
      <FormItem label="性别">
        <RadioGroup v-model="formItem.sex">
          <Radio label="man">Male</Radio>
          <Radio label="women">Female</Radio>
        </RadioGroup>
      </FormItem>
    </Form>
</div>
</template>

<script>
    export default {
        name: "myFolder",
      data(){
        return{
          formItem:{
            sex:'man',
          }
        }
      }
    }
</script>

<style scoped>
.myFolder{
  border: 1px solid #ddd;
  padding: 0.54rem 0 0.44rem 0;
}
  .uploadBox{
    position: relative;
    /*padding-left: 1.2rem;*/
  }
  .header{
    position: absolute;
    top: 0;
    left: 0.5rem;
  }
  .changeImg{
    position: absolute;
    left: 2.87rem;
    bottom: 0;
    cursor: pointer;
    color: #00a0e9;
  }
  .upBox{
    width: 1.46rem;
    height: 1.46rem;
    background-color: #ddd;
    text-align: center;
    line-height: 1.46rem;
    cursor: pointer;
    font-size: 0.14rem;
  }
</style>
