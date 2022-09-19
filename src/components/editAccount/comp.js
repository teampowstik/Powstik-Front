import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Submit } from "../../configApi/function";
import { getUserDetails } from "../../configApi/utilFunction";
import GButton from "../../util/buttons/reusableButton/button";
import { NotifySuccess, NotifyDanger, Toastcontainer } from "../../util/notify";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../util/StyledComponent/input";
import { P2 } from "./../../util/StyledComponent/premadeComponent";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseURL } from "../../configApi/config";

const Comp = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const data = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  //console.log(data);
  const onSubmit = async (data) => {
    if (data.email.indexOf("@") == -1) {
      NotifyDanger("not valid email");
      return;
    }
    if (isNaN(data.phone)) {
      NotifyDanger("Phone number is not valid");
      return;
    }

    if (data.phone.length < 10 || data.phone.length > 13) {
      NotifyDanger("Phone number is not valid");
      return;
    }
    console.log(data);
    const data2 = JSON.parse(JSON.stringify(data));
    //console.log(data2);

    const res = await Submit(data2, "/user/user_details", "post");
    if (res.status === 200 || res.status === 201) {
      NotifySuccess("Successfully updated");
      //alert('Successfully registered');
      setTimeout(function () {
        navigate("/account-details");
      }, 1000);
    } else {
      NotifyDanger(res.data.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="onedivimg">
          <div className="eaimg">
            <img src={"#"} alt="icon" />
          </div>

          <Input
            type="file"
            height="20"
            {...register("profile_img", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>First Name</P2>
          <Input
            placeholder={data.first_name}
            {...register("first_name", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>Last Name </P2>
          <Input
            placeholder={data.last_name}
            {...register("last_name", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>Gender </P2>
          <Input
            placeholder={data.gender}
            {...register("gender", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>Phone </P2>
          <Input
            placeholder={data.phone}
            {...register("phone", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>Email Addrress </P2>
          <Input
            placeholder={data.email}
            {...register("email", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>Country / region </P2>
          <Input
            placeholder={data.country}
            {...register("country", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>Town / City </P2>
          <Input
            placeholder={data.city}
            {...register("city", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>Street name </P2>
          <Input
            placeholder={data.address}
            {...register("address", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>Door no/plot no </P2>
          <Input
            placeholder={data.plot_no}
            {...register("plot_no", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>State</P2>
          <Input
            placeholder={data.state}
            {...register("state", { required: true })}
          />
        </div>
        <div className="onediv">
          <P2>PIN</P2>
          <Input
            placeholder={data.pincode}
            {...register("pincode", { required: true })}
          />
        </div>
        <div className="onedivbtn">
          <button className="Cgbtn">DISCARD CHANGES</button>
          <GButton
            type="submit"
            title="SAVE CHANGES"
            width="300px"
            bg="#8BC34A"
          />
        </div>
      </form>
    </Wrapper>
  );
};
export default Comp;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	align-items: center;

	padding: 5px;
	margin: 10px;
	@media (max-width: 500px) {
		width: auto;
	}
	.onediv {
		margin: 20px;
	}
	.eaimg {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: #e8f3db;
		margin-right: 20px;
	}
	.onedivimg {
		display: flex;
		flex-direction: row !important;
		margin-right: 200px;
		margin-bottom: 50px;
		align-items: center;
		justify-content: space-around;
	}
	.onedivbtn {
		display: flex;
		flex-direction: row;
		margin-right: 200px;
		margin-bottom: 50px;
		align-items: center;

        const onSubmit = async (data) => {
		const res = await Submit(data, '/login', 'post');
		console.log('res......', res);
		if (res.status === 200) {
			localStorage.setItem('access', res.data.access);
			localStorage.setItem('isLoggedIn', true);
			console.log('locally saved');
		}
	};
    useEffect(()=>{

    })
		justify-content: space-around;
	}
	.Cgbtn {
		background: transparent !important;
		border: 2px solid #8bc34a;
		margin-right: 20px;
		width: 300px;
		color: #8bc34a;
        margin:20px;
	}

    @media(max-width: 500px) {
    .onedivbtn {
        flex-direction: column;
    }
`;
