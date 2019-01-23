<template>
  <div class="workLeft">
    <Tabs value="name1">
      <TabPane label="综合" name="name1">
        <div class="aCard">
          <div class="headTit">
            <div class="head"></div>首席执行官
          </div>
          <div class="cardBot">
            <Row>
              <Col span="12">三年工作平均薪资</Col>
              <Col span="12">需求量 (人)</Col>
            </Row>
            <Row style="margin-top: 0.1rem;">
              <Col span="12"><span>一线10000</span><b class="VS">VS</b><span>本地10000</span></Col>
              <Col span="12"><span>一线10000</span><b class="VS">VS</b><span>本地10000</span></Col>
            </Row>
          </div>
        </div>
      </TabPane>
      <TabPane label="平均工资" name="name2">标签二的内容</TabPane>
      <TabPane label="需求量" name="name3">标签三的内容</TabPane>
      <TabPane label="职位类别" name="name4">标签四的内容</TabPane>
    </Tabs>
  </div>
</template>

<script>
    export default {
        name: "jobHot"
    }
</script>

<style scoped>
  .workLeft{
    width: 8.6rem;
  }
  .aCard{
    padding: 0.23rem 0 0.2rem 0.35rem;
    border-bottom: 1px solid #dcdee2;
  }
  .head{
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
    background-color: #ddd;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .head img{
    width: 100%;
    height: 100%;
  }
  .headTit{
    height: 0.4rem;
    font-size: 0.24rem;
    font-weight: 600;
    position: relative;
    padding-left: 0.5rem;
  }
  .cardBot{
    padding: 0.2rem 0 0 0.45rem;
  }
  .VS{
    font-size: 18px;
    color: #3875f2;
    padding: 0 0.08rem;
  }
</style>
