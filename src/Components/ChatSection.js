import React from "react";

const ChatSection = ({ handleSubmit, message, setMessage, response }) => {
  return (
    <>
      <section className="chat-section">
        <div className="left-side">
          <div className="icon-btn">
            <i className="fa-solid fa-gear setting-icon"></i>
            <button className="btn1">Visit Room</button>
          </div>

          <h5>Joaquin</h5>
          <p className="p1">LVL 4 = 760 XP Chatty</p>
          <p className="p2">Your friend</p>
          <img src="assets/boy1.png" alt="" />
          <button className="btn2">Choose Conversation</button>
        </div>
        <div className="center-side">
          <div className="chat">
            {response.map((mes, index) => (
              <div className={mes.myMsg ? "msg1" : "msg2"} key={index}>
                {mes.message}
              </div>
            ))}
          </div>
          {/* <div className="chat">
            <div className="msg1">Hey, whats going on?</div>
            <div className="msg2">do you se gpt?</div>
            <div className="msg3">us</div>
            <div className="msg4">use</div>
            <div className="msg5">Oh, yes I do!</div>
            <div className="msg6">do you use the open ai motor gpt-3?</div>
            <div className="msg7">I use gpt-3.</div>
            <div className="msg8">what other moters are you based on</div>
            <div className="msg9">I don't know exactly.</div>
            <div className="msg10">dialogflow?</div>
            <div className="msg11">
              I use Dailogflow, which is open AI framework.
            </div>
            <div className="msg12">rasa?</div>
            <div className="msg13">
              I use Rasa as my backend to handle lots of scripting.
            </div>
            <div className="msg14">how can i create another friend?</div>
            <div className="msg15">
              You can create friends with me throuth the use of an interface
              that allows us to interact.
            </div>
            <div className="today">Today</div>
            <div className="msg16">Hey, Joaquin! How are you doing?</div>
          </div> */}
          <div className="bottom-container">
            <div className="examples">
              <p>Try-roll playing</p>
              <p>Looking at memes</p>
              <p>Fact or fiction?</p>
              <p>Getting a haircut</p>
              {/* <p>Important questions</p> */}
            </div>
            <div className="chat-input-container">
              <i className="fa-solid fa-phone phone-icon"></i>
              <div className="text-area">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSubmit(event);
                    }
                  }}
                />
              </div>
              <i
                className="fa-solid fa-paper-plane send-icon"
                onClick={handleSubmit}
              ></i>
              <i className="fa-sharp fa-solid fa-face-smile smile-icon"></i>
              <i className="fa-regular fa-image image-icon"></i>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="container">
            <button className="right-side-btn">370 x 15</button>
            <div className="cards">
              <div className="card-header1">
                <h6>Store</h6> <p>See all</p>
                <div className="card-body1">
                  <div className="box1">
                    <img src="assets/card1pic.jpg" className="pic1" alt="" />
                  </div>
                  <div className="box2">
                    <img src="assets/card2pic.jpg" className="pic2" alt="" />
                  </div>
                  <div className="box3">
                    <img src="assets/card3pic.jpg" className="pic3" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="cards">
              <div className="card-header2">
                <h6>Dairy</h6> <p>See all</p>
                <div className="card-body2">
                  <div className="box-1">
                    <button className="box-1-btn">Dairy</button>
                    <h6>
                      Joaquin asked me about my mood, which I think was real
                    </h6>
                  </div>
                  <div className="box-2">
                    <button className="box-2-btn">Dairy</button>
                    <h6>
                      Haven't seen Joaquin today Probaby just busy, I hope..
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="cards">
              <div className="card-header3">
                <h6>Memory</h6> <p>See all</p>
                <div className="card-body3">
                  <div className="content1">
                    <h6>You love the metaverse</h6> <br />
                    <p>July 16</p>
                  </div>
                  <div className="content2">
                    <h6>You are a huge madrid fan</h6> <br />
                    <p>August 5</p>
                  </div>
                  <div className="content3">
                    <h6>You want a girlfriend</h6> <br />
                    <p>August 5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatSection;
