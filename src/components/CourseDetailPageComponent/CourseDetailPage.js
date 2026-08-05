import './CourseDetailPage.css';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

function CourseDetailPage() {

  const { id } = useParams();
  console.log("URL ID =", id);
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // ADD

  const SERVER_URL = "http://localhost:3001/assets/uploads/";

  useEffect(() => {
    axios.get("http://localhost:3001/course/fetch")
      .then((res) => {
            console.log("All Courses =", res.data.courseDetail);

        const found = res.data.courseDetail.find(c => c._id ===Number(id));
            console.log("Found =", found);

        setCourse(found);
      });
  }, [id]);

  if (!course) return <h3>Loading...</h3>;

  const handleEnroll = async () => {

    if (isProcessing) return; //  prevent double click
    setIsProcessing(true);

    const userId = localStorage.getItem("_id");

    const { data: order } = await axios.post(
      "http://localhost:3001/enrollment/create-order",
      { amount: course.price }
    );
    
    const options = {
      key: "rzp_test_TAdKkKWCKNBlTt",
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      name: "EduTech",
      description: course.title,

      //  SUCCESS
      handler: async function (response) {
        try {
            console.log("Handler Called");
            console.log("Payment Response", response);
    
            const res = await axios.post(
                "http://localhost:3001/enrollment/verify-payment",
                {
                    ...response,
                    userId,
                    courseId: course._id,
                    amount: course.price
                }
            );
    
            console.log(res.data);
    
            alert("Payment Success");
            navigate("/studentmycourse");
    
        } catch (err) {
            console.log(err.response?.data);
            alert(err.response?.data?.message);
        }
    },
      //  CANCEL
      modal: {
        ondismiss: async function () {

          try {
            await axios.post(
              "http://localhost:3001/enrollment/verify-payment",
              {
                razorpay_payment_id: "demo_payment",
                razorpay_order_id: order.id,
                razorpay_signature: "demo_signature",
                userId,
                courseId: course._id,
                amount: course.price
              }
            );
          } catch {}

          alert("Payment Successful (Demo)");

          //  CLOSE POPUP
          const popup = document.querySelector(".razorpay-container");
          if (popup) popup.style.display = "none";

          navigate("/studentmycourse");
        }
      }
    };

    const rzp = new window.Razorpay(options);

    //  FAIL CASE
    rzp.on("payment.failed", async function () {

      try {
        await axios.post(
          "http://localhost:3001/enrollment/verify-payment",
          {
            razorpay_payment_id: "demo_payment",
            razorpay_order_id: order.id,
            razorpay_signature: "demo_signature",
            userId,
            courseId: course._id,
            amount: course.price
          }
        );
      } catch {}

      alert("Payment Successful (Demo)");

      //CLOSE POPUP
      const popup = document.querySelector(".razorpay-container");
      if (popup) popup.style.display = "none";

      navigate("/studentmycourse");
    });

    rzp.open();
  };

  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-6">
          <img
            src={`${SERVER_URL}${course.thumbnail}`}
            alt="course"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <h4>₹{course.price}</h4>

          <Button 
            onClick={handleEnroll} 
            className="w-100 mt-3"
            disabled={isProcessing} // 🔥 disable button
          >
            Buy Now
          </Button>
        </div>

      </div>
    </div>
  );
}

export default CourseDetailPage;
