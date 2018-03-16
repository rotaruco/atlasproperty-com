import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rmwc/Button';
import Style from './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.analytics.page('Home');
  }
  render() {
    return (
      <div className={ Style.container }>
        <div className={ Style.background } />
        <svg className={ Style.personOne } viewBox="69.80699920654297 16.000154495239258 60.19300079345703 168.23184204101562" height="200" width="100" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" preserveAspectRatio="xMidYMid meet">
          <g>
            <path d="M105.775 47.368l-7.576-5.08-.466-3.78s-1.199.969-2.7 2.365l.2-1.448-15.215 3.893 4.316 6.35-7.436 25.462-4.331 18.877 9.523 4.511c.064 2.999.141 4.965.141 4.965s24.825 1.772 25.174 1.654c.351-.118-1.63-57.769-1.63-57.769z" fill="#B5A0C3" data-color="1" />
            <path d="M78.63 178.286c.201.215.38.472.527.785.111.236.223.463.335.689.421.083.829.244 1.197.471.963-.287 2.06-.06 2.884.525a3.152 3.152 0 0 1 1.267-.019c.364-.228.718-.472 1.064-.704l-.777-4.812s1.65-22.391 1.299-29.367c-.259-5.159-2.093-10.289-2.093-10.289l5.992-11.121-14.285-2.054-3.16 6.458 8.536 47.689-2.786 1.749z" fill="#F2AAB6" data-color="2" />
            <path d="M87.942 125.652l7.29 15.326 27.285 31.607 1.444 9.804-3.609 1.61h5.486L129.591 172l-5.341-2.927s-9.072-19.568-12.981-25.589-8.03-8.945-8.03-8.945l-2.304-10.097-12.993 1.21z" fill="#F2AAB6" data-color="2" />
            <path d="M122.893 175.134c.141.019.28.046.417.082.95-.583 1.729-1.445 2.164-2.495.374-.903.959-1.63 1.731-2.027l-2.955-1.619s-9.072-19.568-12.981-25.589c-3.909-6.022-8.03-8.945-8.03-8.945l-2.304-10.097-12.993 1.209 7.29 15.326 27.285 31.607.376 2.548z" opacity=".08" />
            <path fill="#FCF7F2" d="M80.73 176.857l1.756 2.051 3.582-.908.551 5.268H69.807l10.923-6.411z" data-color="3" />
            <path fill="#FCF7F2" d="M122.128 174.415l3.502-1.661-.686-3.445 5.056 2.276-4.296 12.647h-6.63l4.023-2.19-.969-7.627z" data-color="3" />
            <path d="M83.9 100.738l-2.627.801-1.271-.801s-.705-15.452.015-20.267c1.399-9.348 4.316-28.372 4.316-28.372l7.922 6.256-8.355 42.383z" fill="#FCF7F2" data-color="3" />
            <path d="M80.002 100.738l.778 9.407-6.505 15.851s5.919 3.219 13.667 2.291c7.747-.928 13.864-.298 13.864-.298l-.674-3.546s3.597-7.684 4.936-13.495c1.338-5.811.354-6.936.354-6.936L83.9 100.738h-3.898z" fill="#A37F94" data-color="4" />
            <path fill="#A37F94" d="M83.9 100.738l-3.12 9.407-.778-9.407H83.9z" data-color="4" />
            <path opacity=".2" d="M83.9 100.738l-3.12 9.407-.778-9.407H83.9z" />
            <path fill="#F2AAB6" d="M79.085 26.577l-.63 3.085-2.051 3.412 2.347.861.917 5.991h6.41l3.729 7.915 7.343-7.206v-2.717L79.085 26.577z" data-color="2" />
            <path opacity=".2" d="M79.085 26.577l-.63 3.085-2.051 3.412 2.347.861.917 5.991h6.41l3.729 7.915 7.343-7.206v-2.717L79.085 26.577z" />
            <path d="M74.773 20.788s8.156-5.391 13.171-4.732c5.015.659 9.884 2.337 10.955 6.359 1.071 4.022-1.748 15.503-1.748 15.503l-1.865.591-15.151-8.033-5.362-9.688z" fill="#FCF7F2" data-color="3" />
            <path fill="#425066" d="M95.448 30.849L82.31 41.703l-5.309-6.602L90.14 24.247l5.308 6.602z" data-color="5" />
            <path fill="#F2AAB6" d="M84.402 47.577l-1.801-8.261 2.078-4.352-.346-2.782-2.917-2.14.914-.658 3.519 2.249.65 3.512v-3.567l-3.695-2.667 1.153-.57 4.112 3.073v2.963l.378-3.402-3.515-2.634.971-.439 3.844 2.469.599 3.275.409-10.678 1.049-.553.974 15.419-4.497 8.256-3.879 1.487z" data-color="2" />
            <path d="M98.13 38.508s-6.439 5.132-8.165 8.759c-1.726 3.627-5.251 15.918-6.718 25.375-1.468 9.457-.65 30.1-.65 30.1s24.876 1.752 25.227 1.635c.35-.117-1.635-57.11-1.635-57.11l-7.591-5.022-.468-3.737z" fill="#B5A0C3" data-color="1" />
            <path d="M84.333 97.885c2.217 2.236 12.367 2.729 20.6 2.853 9.781.147 16.211-.965 17.175-2.862.963-1.897-4.787-22.746-4.787-22.746H85.795s-3.679 20.519-1.462 22.755z" fill="#FCF7F2" data-color="3" />
            <path d="M84.333 97.885c2.217 2.236 12.367 2.729 20.6 2.853 9.781.147 16.211-.965 17.175-2.862.963-1.897-4.787-22.746-4.787-22.746H85.795s-3.679 20.519-1.462 22.755z" opacity=".08" />
            <path d="M85.127 71.825l33.493 1.329s-1.011 8.414-3.465 10.463c-2.454 2.049-26.506 1.233-27.718-.366-1.212-1.599-2.31-11.426-2.31-11.426z" fill="#FCF7F2" data-color="3" />
            <path d="M114.589 72.995s-7.856-22.623-9.136-24.448c-1.279-1.825-3.097-3.644-6.175-3.006-3.078.637-11.746 26.725-11.746 26.725l-1.971-.441s7.196-24.897 12.143-27.243c4.947-2.345 8.574 2.389 11.075 7.162 2.501 4.772 7.584 21.321 7.584 21.321l-1.774-.07z" fill="#FCF7F2" data-color="3" />
            <path d="M114.589 72.995s-7.856-22.623-9.136-24.448c-1.279-1.825-3.097-3.644-6.175-3.006-3.078.637-11.746 26.725-11.746 26.725l-1.971-.441s7.196-24.897 12.143-27.243c4.947-2.345 8.574 2.389 11.075 7.162 2.501 4.772 7.584 21.321 7.584 21.321l-1.774-.07z" opacity=".08" />
            <path d="M80.017 49.259l8.858-3.396 3.38 12.493s3.864-11.936 7.152-13.279c3.288-1.343 5.782.212 7.478 2.765 1.696 2.553.237 8.365-2.556 12.826-1.579 2.522-11.022 17.322-15.688 15.644-2.262-.814-8.624-27.053-8.624-27.053z" fill="#E6D2D5" data-color="6" />
            <path d="M100.091 84.334s.287 2.243 2.828 2.243c2.542 0 2.828-2.169 2.828-2.169l-5.656-.074z" fill="#E0BB22" data-color="7" />
            <path fill="#B5A0C3" d="M92.255 58.355l-1.404 11.256 1.546-9.627 3.367 6.18-3.509-7.809z" data-color="1" />
          </g>
        </svg>
        <svg className={ Style.personTwo } viewBox="61 10.500603675842285 77.99998474121094 178.9993896484375" height="200" width="100" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" preserveAspectRatio="xMidYMid meet">
          <g>
            <path fill="#F2EBE4" d="M77.155 173.873l-6.616 1.943-9.539.543.164 1.267 22.704 9.066 2.269-5.801-8.982-7.018z" data-color="1" />
            <path fill="#F2EBE4" d="M125.664 179.575l-2.739 4.48-9.774 4.328.613 1.117h24.413v-4.541l-12.513-5.384z" data-color="1" />
            <path fill="#425066" d="M112.074 121.356l-12.553 17.767-.845 2.736-1.736 2.067-.858 3.149-9.945 31.145.395 2.815-.827.959-12.487-8.259 2.191-3.325 9.094-27.818 2.191-9.723 16.926-32.712 8.454 21.199z" data-color="2" />
            <path opacity=".08" d="M112.074 121.356l-12.553 17.767-.845 2.736-1.736 2.067-.858 3.149-9.945 31.145.395 2.815-.827.959-12.487-8.259 2.191-3.325 9.094-27.818 2.191-9.723 16.926-32.712 8.454 21.199z" />
            <path fill="#425066" d="M128.461 98.68l-2.297 10.547 5.219 39.867 6.471 29.109 1.146 2.763-.457 1.616-.366 3.377-13.474-6.384.522-2.532-1.774-1.898.939-2.953-4.697-19.512-2.922-3.586-.731-7.383-13.151-40.71 15.761-4.008 9.811 1.687z" data-color="2" />
            <path d="M85.399 42.729s-2.983-1.172-3.52-.868c-.537.304-.197.599.337.885l4.423 2.366-1.24-2.383z" fill="#F2AAB6" data-color="3" />
            <path d="M97.462 52.274l-.972-2.001s.547-1.49.38-2.483c-.167-.993-2.596-4.134-2.596-4.134l-1.685-4.181s-1.011.526-.798 1.225c.213.7 1.134 1.89 1.134 1.89l-3.277 5.633 4.246 8.471-1.858 2.435 11.999 19.406 1.882-17.719-8.455-8.542z" fill="#F2AAB6" data-color="3" />
            <path d="M95.966 54.301l-.124.019-3.808 4.81 10.634 17.199c-.041-.396-.231-.863-.602-1.414-4.606-6.84-6.1-20.614-6.1-20.614z" fill="#F2AAB6" data-color="3" />
            <path d="M85.419 45.763c0-.553 1.22-2.602 1.22-2.602s.641.307.422 1.11l-.599 2.195s-1.043-.15-1.043-.703z" fill="#F2AAB6" data-color="3" />
            <path d="M86.141 47.199c0-.553 1.22-2.602 1.22-2.602s.641.307.422 1.11l-.599 2.195s-1.043-.15-1.043-.703z" fill="#F2AAB6" data-color="3" />
            <path d="M86.87 48.317c0-.455 1.003-2.141 1.003-2.141s.528.253.347.913l-.493 1.805s-.857-.122-.857-.577z" fill="#F2AAB6" data-color="3" />
            <path d="M85.399 42.729s-2.983-1.172-3.52-.868c-.537.304-.197.599.337.885l4.423 2.366-1.24-2.383z" opacity=".08" />
            <path d="M97.462 52.274l-.972-2.001s.547-1.49.38-2.483c-.167-.993-2.596-4.134-2.596-4.134l-1.685-4.181s-1.011.526-.798 1.225c.213.7 1.134 1.89 1.134 1.89l-3.277 5.633 4.273 8.524-1.885 2.381 11.999 19.406 1.882-17.719-8.455-8.541z" opacity=".08" />
            <path d="M85.419 45.763c0-.553 1.22-2.602 1.22-2.602s.641.307.422 1.11l-.599 2.195s-1.043-.15-1.043-.703z" opacity=".08" />
            <path d="M86.141 47.199c0-.553 1.22-2.602 1.22-2.602s.641.307.422 1.11l-.599 2.195s-1.043-.15-1.043-.703z" opacity=".08" />
            <path d="M86.87 48.317c0-.455 1.003-2.141 1.003-2.141s.528.253.347.913l-.493 1.805s-.857-.122-.857-.577z" opacity=".08" />
            <path d="M101.08 24.736c-.182.123-2.061 5.494-1.75 6.169.311.675 4.187.429 4.187.429l-2.437-6.598z" fill="#F2CCD5" data-color="4" />
            <path d="M114.684 29.709l-13.351-9.904s-.117.543-.239 1.464v.001c-.024.18-.047.373-.071.581l-.003.026a30.19 30.19 0 0 0-.061.606l-.007.076c-.019.218-.037.446-.053.684l-.007.114c-.013.21-.025.426-.034.649l-.006.137c-.01.249-.017.506-.02.769l-.002.179c-.002.227-.002.459.001.695l.002.173c.005.275.015.556.028.841l.012.221c.013.247.03.498.05.751l.014.181c.026.296.057.596.093.899l.031.246c.035.268.073.538.117.81l.025.163c.052.312.113.627.178.942l.054.25c.063.289.132.578.208.868l.031.125a23.337 23.337 0 0 0 .363 1.209c.102.307.21.614.328.92l.025.068c.126.322.264.642.41.961l.11.236c.152.322.311.642.485.958a.28.28 0 0 0 .087.091.351.351 0 0 0 .061.039c.748.371 3.433-1.233 3.433-1.233l3.002 3.546 8.535-1.332-3.829-8.01z" fill="#F2AAB6" data-color="3" />
            <path d="M108.329 43.482l-3.259-3.117 12.804-7.175.64 4.528s4.977 5.237 6.772 9.817c4.32 11.022 8.302 47.58 8.302 47.58l1.762 4.303L113.223 101l-14.717 2.742s2.613-17.811 4.071-34.172c1.457-16.36 5.752-26.088 5.752-26.088z" fill="#F2AAB6" data-color="3" />
            <path d="M101.893 86.438c1.706-14.607 4.176-24.098 5.352-32.605 1.167-8.445 1.167-10.672 1.167-10.672l-1.167-2.486 10.629-7.484-12.804 7.175 3.259 3.117s-4.295 9.728-5.753 26.089c-1.458 16.361-4.071 34.172-4.071 34.172l2.901-.541c.07-.014-.746-6.21.487-16.765z" fill="#F2CCD5" data-color="4" />
            <path d="M113.046 46.653c-2.372 1.393-3.388 4.795-2.892 9.485.496 4.69 2.964 16.281 2.964 16.281l1.983 1.687v1.371l4.438.422-5.098.527-7.197 20.25 5.978 4.324s14.192-16.871 15.238-24.469c1.047-7.597-4.859-24.416-5.69-26.27-.832-1.854-1.721-4.128-4.086-4.652-1.849-.41-3.266-.35-5.638 1.044z" fill="#F2CCD5" data-color="4" />
            <path fill="#F2AAB6" d="M107.482 96.993l-1.205 5.302 7.159 2.527-.744-4.205-5.21-3.624z" data-color="3" />
            <path d="M116.927 31.015c.296.305-.732 1.855-.732 1.855s-3.689.847-7.785-4.293l8.517 2.438z" fill="#34192B" data-color="5" />
            <path d="M100.362 19.499c0 .694 2.349 3.836 7.1 8.279 4.066 3.802 8.954 4.004 9.588 3.802.415-.132 2.153-2.841 3.393-5.695.658-1.514 1.175-3.068 1.28-4.301.303-3.557-.668-9.26-3.034-10.302-2.201-.969-8.815-1.176-11.955.184-3.398 1.471-6.372 7.339-6.372 8.033z" fill="#AAC6CE" data-color="6" />
            <path d="M104.034 13.646s1.432 4.064 5.923 7.613c4.491 3.549 10.629 4.039 10.629 4.039l.518-1.265s-6.518-.358-10.48-3.211c-4.234-3.049-6.59-7.176-6.59-7.176z" fill="#AAC6CE" data-color="6" />
            <path d="M104.034 13.646s1.432 4.064 5.923 7.613c4.491 3.549 10.629 4.039 10.629 4.039l.518-1.265s-6.518-.358-10.48-3.211c-4.234-3.049-6.59-7.176-6.59-7.176z" opacity=".2" />
            <path fill="#425066" d="M96.264 49.01l-6.641 3.529-6.172-11.861 6.641-3.529 6.172 11.861z" data-color="2" />
            <path fill="#FFFFFF" d="M95.044 47.89l-5.642 2.998-4.988-9.584 5.643-2.998 4.987 9.584z" data-color="7" />
            <path d="M95.966 54.301l-.124.019-3.808 4.81 10.634 17.199c-.041-.396-.231-.863-.602-1.414-4.606-6.84-6.1-20.614-6.1-20.614z" fill="#F2AAB6" data-color="3" />
          </g>
        </svg>
        <svg className={ Style.personThree } viewBox="55.49931335449219 18.000118255615234 89.00068664550781 163.9998779296875" height="200" width="100" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" preserveAspectRatio="xMidYMid meet">
          <g>
            <path d="M89.17 55.653l-.486-.087c.846-4.747.675-14.718.673-14.819l.494-.009c.002.101.173 10.12-.681 14.915z" fill="#F2AAB6" data-color="1" />
            <path fill="#B0CAD6" d="M82.736 106.978l-12.503-4.372 2.169-6.243 12.503 4.372-2.169 6.243z" data-color="2" />
            <path opacity=".55" d="M82.736 106.978l-12.503-4.372 2.169-6.243 12.503 4.372-2.169 6.243z" />
            <path fill="#D67680" d="M143.732 172.4h-3.842l-3.495.089-9.213 4.542.291.935H144.5l-.768-5.566z" data-color="3" />
            <path d="M126.655 141.213c-2.857-5.722-9.925-10.38-9.925-10.38l-3.273-10.168-14.572 1.483 9.926 16.205 22.468 26.265 5.176.622 1.669-3.753c0 .001-8.612-14.552-11.469-20.274z" fill="#F2AAB6" data-color="1" />
            <path d="M126.655 141.213c-2.857-5.722-9.925-10.38-9.925-10.38l-3.273-10.168-14.572 1.483 9.926 16.205 22.468 26.265 3.835.706 2.392-.706.619-3.13c-.001 0-8.613-14.553-11.47-20.275z" opacity=".2" />
            <path d="M69.594 172.466l-13.263.098s-1.162 1.165-.739 1.165c.422 0 17.642 8.271 17.642 8.271l1.6-4.536-2.486-3.099-2.754-1.899z" fill="#D67680" data-color="3" />
            <path d="M76.816 131.681l-4.824 32.117 2.181 3.622 4.579-.734s5.505-12.355 6.405-17.37c.9-5.014.528-11.068.528-11.068l12.037-15.781-12.565-5.508-8.341 14.722z" fill="#F2AAB6" data-color="1" />
            <path fill="#FCF7F2" d="M70.692 172.458l-1.098.008.184 2.765 5.056 2.233 1.243-3.523 2.676-7.256-6.76-2.888-1.301 8.661z" data-color="4" />
            <path fill="#FCF7F2" d="M143.732 172.4l-.182-1.319-5.426-9.593-6.846 3.131 6.253 7.31-1.136.56 2.192 1.876 5.145-1.965z" data-color="4" />
            <path d="M90.463 64.869l-1.257 39.67-6.313 14.713s2.554 2.811 6.313 4.377c3.759 1.565 10.094 2.462 20.795 1.211s18.289-8.66 18.289-8.66l-12.997-19.928-4.735-12.758-1.857-29.706-18.238 11.081z" fill="#FCF7F2" data-color="4" />
            <path d="M92.363 22.219l-6.406 1.862s-.054 3.322.312 7.327l-.002-.017L83.915 36h2.957l-.002-.012c.35 1.962.649 3.195 1.316 4.749l1.17.009.248.262.246-.271 2.11-.436 3.094 6.594 8.541-4.563-11.232-20.113z" fill="#F2AAB6" data-color="1" />
            <path fill="#B0CAD6" d="M102.019 40.564l-9.935 7.171v7.636l13.418-11.07-3.483-3.737z" data-color="2" />
            <path d="M92.084 55.371s-2.357 7.218-1.697 13.276c.66 6.058 5.41 17.734 5.41 17.734l16.339-.563-2.839-37.564-5.702-3.448-11.511 10.565z" fill="#B0CAD6" data-color="2" />
            <path d="M109.72 50.643h1.307s10.348 14.953 10.348 14.949 5.174 14.085 5.174 17.155c0 3.07-3.817 6.428-6.796 7.602-2.549 1.004-6.572.376-6.572.376s-2.575-6.472-2.622-7.232c-.048-.759-.839-32.85-.839-32.85z" fill="#A37F94" data-color="5" />
            <path d="M109.72 50.643l12.394 26.491 3.168-2.648s.143-4.051-4.048-11.426-10.207-12.417-10.207-12.417h-1.307z" fill="#A37F94" data-color="5" />
            <path fill="#A37F94" d="M113.562 84.654l-10.198-14.616 1.346-4.445 10.119 17.472-1.267 1.589z" data-color="5" />
            <path d="M109.72 50.643l12.394 26.491 3.168-2.648s.143-4.051-4.048-11.426-10.207-12.417-10.207-12.417h-1.307z" opacity=".2" />
            <path opacity=".2" d="M113.562 84.654l-10.198-14.616 1.346-4.445 10.119 17.472-1.267 1.589z" />
            <path d="M79.501 113.052c-1.95 0-4.279-.769-6.643-2.242-3.417-2.131-5.897-5.112-5.897-7.091 0-1.217.351-2.095 1.045-2.61 1.149-.853 2.789-.366 2.858-.346l-.143.474c-.014-.004-1.475-.434-2.422.271-.559.417-.843 1.161-.843 2.211 0 1.789 2.435 4.656 5.664 6.669 3.344 2.085 6.58 2.715 8.656 1.687 5.225-2.587 7.505-6.767 5.47-22.435-.278-2.141-.656-3.896-1.021-5.593-.88-4.084-1.639-7.61-.511-14.472 1.222-7.441 2.292-11.435 5.15-22.111.972-3.63 2.182-8.147 3.673-13.832l.478.126a2696.561 2696.561 0 0 1-3.673 13.834c-2.853 10.658-3.921 14.646-5.14 22.063-1.112 6.769-.362 10.252.507 14.286.367 1.707.747 3.472 1.028 5.634 2.074 15.965-.307 20.252-5.741 22.943-.722.359-1.566.534-2.495.534z" fill="#F2AAB6" data-color="1" />
            <path d="M91.34 47.594c.972-3.63 2.182-8.148 3.673-13.834l-.478-.126c-1.491 5.684-2.701 10.202-3.673 13.832-.481 1.797-.911 3.402-1.3 4.869.4-5.032.289-11.515.287-11.596l-.494.009c.002.1.173 10.071-.673 14.819l.031.006c-1.367 5.288-2.147 8.807-3.001 14.005-1.128 6.861-.369 10.388.511 14.472.365 1.697.743 3.452 1.021 5.593 2.035 15.668-.246 19.848-5.47 22.435-2.076 1.028-5.313.397-8.656-1.687-3.229-2.013-5.664-4.881-5.664-6.669 0-1.05.284-1.794.843-2.211.947-.705 2.407-.275 2.422-.271l.143-.474c-.069-.02-1.709-.507-2.858.346-.693.515-1.045 1.394-1.045 2.61 0 1.978 2.48 4.96 5.897 7.091 2.364 1.473 4.692 2.242 6.643 2.242.929 0 1.773-.175 2.494-.532 5.434-2.691 7.815-6.978 5.741-22.943-.281-2.162-.661-3.927-1.028-5.634-.869-4.034-1.619-7.517-.507-14.286 1.22-7.42 2.288-11.408 5.141-22.066z" opacity=".15" />
            <path d="M101.64 19.458c4.045 2.51 12.725 25.483 12.725 25.483l-12.346-2.794-13.648-18.158-2.414.093s3.167-4.068 6.777-5.308c3.61-1.24 6.234-.974 8.906.684z" fill="#42243A" data-color="6" />
            <path d="M101.64 19.458c4.045 2.51 12.725 25.483 12.725 25.483l-12.346-2.794-13.648-18.158-2.414.093s3.167-4.068 6.777-5.308c3.61-1.24 6.234-.974 8.906.684z" opacity=".2" />
            <path d="M109.298 48.254l-5.06-2.689 1.264-1.264-3.483-3.736-9.935 7.17v7.636s-2.357 7.218-1.697 13.276c.66 6.058 5.41 17.734 5.41 17.734l16.339-.563-2.838-37.564z" opacity=".05" />
            <path opacity=".15" d="M102.019 40.564l-9.935 7.171v7.636l13.418-11.07-3.483-3.737z" />
            <path d="M97.004 64.869l15.132-.559s-1.629-10.465-2.239-14.766c-.339-2.391-4.707-5.907-6.673-5.256-1.966.652-3.802 1.736-6.007 5.058-2.204 3.324-.213 15.523-.213 15.523z" fill="#B0CAD6" data-color="2" />
            <path d="M88.371 23.989s6.313 14.154 14.854 20.301 15.132 8.381 15.132 8.381 2.69-6.845-1.671-9.871c-4.361-3.026-10.376-1.488-15.482-5.213-5.106-3.726-12.833-13.598-12.833-13.598z" fill="#42243A" data-color="6" />
            <path d="M98.454 64.869l-.614 12.106-20.238 19.369-3.992 8.753 6.591 2.049 1.021-9.126s23.476-16.308 23.923-18.05c.447-1.741 2.171-15.482 2.171-15.482l-8.862.381z" fill="#F2AAB6" data-color="1" />
          </g>
        </svg>
        <div className={ Style.left }>
          <Link to="/properties">
            <h1 className={ Style.heading }>
              I'm looking for a smart <br />place to rent.
            </h1>
            <ul className={ Style.list }>
              <li>Safe, secure, and clean.</li>
              <li>Professional and personable service.</li>
              <li>Personal hospitality plans.</li>
            </ul>
            <Button
              raised
              theme="secondary-bg text-primary-on-secondary"
              className={ Style.button }
            >We Can Help You Find It.
            </Button>
          </Link>
        </div>
        <div className={ Style.right }>
          <Link to="solutions">
            <h1 className={ Style.heading }>
              I'm looking for sound managment.
            </h1>
            <ul className={ Style.list }>
              <li>Comprehensive asset management.</li>
              <li>Tenant satisfaction occupancy model.</li>
              <li>Proactive servicing and maintenance.</li>
            </ul>
            <Button
              raised
              theme="secondary-bg text-primary-on-secondary"
              className={ Style.button }
            >We Can Help You Manage It.
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;